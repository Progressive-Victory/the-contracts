import z from 'zod';
import { zPermission } from './Permission.js'

export const zOrgChartVersion = z.object({
	versionNumber: z.number().int().positive(),
	fileHref: z.string(),
});
export type OrgChartVersion = z.infer<typeof zOrgChartVersion>;

export const zHandleSide = z.enum(['top', 'right', 'bottom', 'left'])
export type HandleSide = z.infer<typeof zHandleSide>

export const zPositionType = z.enum(['POSITION', 'GROUP'])
export type PositionType = z.infer<typeof zPositionType>

export const zOrgChartPosition = z.strictObject({
    id: z.number().int().positive(),
    name: z.string(),
    coordinates: z
        .strictObject({ x: z.number(), y: z.number() })
        .optional(),
    type: zPositionType,
    seats: z.number().int().nonnegative().nullable(),
    userIds: z.array(z.number().int()),
    permissions: z.array(zPermission).default([]),
    parentGroupId: z.number().int().positive().optional(),
    groupBounds: z
        .strictObject({
            x: z.number().max(0),
            y: z.number().max(0),
            width: z.number().positive(),
            height: z.number().positive(),
        })
        .optional(),
})
export type OrgChartPosition = z.infer<typeof zOrgChartPosition>

export const zAnchorPoint = z.strictObject({
    id: z.string(),
    kind: z.literal('anchorpoint'),
    positionId: z.number().int().positive(),
    handle: zHandleSide,
})
export type AnchorPoint = z.infer<typeof zAnchorPoint>

export const zWaypoint = z.strictObject({
    id: z.string(),
    kind: z.literal('waypoint'),
    coordinates: z.strictObject({
        x: z.number(),
        y: z.number(),
    }),
})
export type Waypoint = z.infer<typeof zWaypoint>

const zBranchPointReference = z.strictObject({
    id: z.string().min(1),
    kind: z.literal('branchpoint'),
})
export type BranchPointReference = z.infer<typeof zBranchPointReference>

const zBranchPoint = z.strictObject({
    id: z.string().min(1),
    coordinates: z.strictObject({
        x: z.number(),
        y: z.number(),
    }),
})
export type BranchPoint = z.infer<typeof zBranchPoint>

export type LinePointData = AnchorPoint | Waypoint | BranchPointReference

export type ResolvedBranchPoint = BranchPointReference & Pick<BranchPoint, "coordinates">

export const zLine = z.strictObject({
    id: z.string(),
    points: z.array(
        z.discriminatedUnion('kind', [
            zAnchorPoint,
            zWaypoint,
            zBranchPointReference,
        ])
    ),
})
export type Line = z.infer<typeof zLine>

const parentLines = (line: Line, lines: Line[]): Line[] => {
    const source = line.points[0]
    if (source?.kind !== 'branchpoint') return []
    return lines.filter(
        (parent) =>
            parent.id !== line.id &&
            parent.points
                .slice(1)
                .some(
                    (point) =>
                        point.kind === 'branchpoint' && point.id === source.id
                )
    )
}

const incomingLineCount = (pointId: string, lines: Line[]): number => {
    return lines.filter((line) =>
        line.points
            .slice(1)
            .some(
                (point) => point.kind === 'branchpoint' && point.id === pointId
            )
    ).length
}

const hasLineCycle = (lines: Line[]): boolean => {
    const state = new Map<string, 'visiting' | 'done'>()
    const visit = (line: Line): boolean => {
        const current = state.get(line.id)
        if (current === 'visiting') return true
        if (current === 'done') return false
        state.set(line.id, 'visiting')
        if (parentLines(line, lines).some(visit)) return true
        state.set(line.id, 'done')
        return false
    }
    return lines.some(visit)
}

const isMovablePoint = (
    point: LinePointData | ResolvedBranchPoint
): point is Waypoint | ResolvedBranchPoint => {
    return (
        point.kind === 'waypoint' ||
        (point.kind === 'branchpoint' && 'coordinates' in point)
    )
}

const lineEndpoints = (line: Line): {
    source: AnchorPoint | BranchPointReference
    target: AnchorPoint | BranchPointReference
} => {
    const source = line.points[0]
    const target = line.points[line.points.length - 1]
    if (
        (source?.kind !== 'anchorpoint' && source?.kind !== 'branchpoint') ||
        (target?.kind !== 'anchorpoint' && target?.kind !== 'branchpoint')
    )
        throw new Error(`Line ${line.id} must have anchored endpoints`)
    return { source, target }
}

const lineError = (line: Line): string | null => {
    if (typeof line.id !== 'string' || line.id.length === 0)
        return 'A line must have a nonempty id'
    if (line.points.length < 2) return 'A line must have at least two points'
    const pointIds = new Set<string>()
    for (const [index, point] of line.points.entries()) {
        if (!point.id) return `Point ${index} must have a nonempty id`
        if (pointIds.has(point.id)) return `Duplicate point id ${point.id}`
        pointIds.add(point.id)
        const isEndpoint = index === 0 || index === line.points.length - 1
        if (
            isEndpoint &&
            point.kind !== 'anchorpoint' &&
            !(
                index === line.points.length - 1 && point.kind === 'branchpoint'
            ) &&
            !(index === 0 && point.kind === 'branchpoint')
        )
            return 'Line endpoints must be anchorpoints'
        if (
            !isEndpoint &&
            point.kind !== 'waypoint' &&
            point.kind !== 'branchpoint'
        )
            return 'Only waypoints or branchpoints may be interior points'
        if (
            isMovablePoint(point) &&
            (!Number.isFinite(point.coordinates.x) ||
                !Number.isFinite(point.coordinates.y))
        )
            return `Point ${index} must have finite coordinates`
    }
    const { source, target } = lineEndpoints(line)
    if (
        source.kind === 'anchorpoint' &&
        target.kind === 'anchorpoint' &&
        source.positionId === target.positionId
    )
        return 'A line cannot connect a position to itself'
    return null
}

const resolveLineSource = (
    line: Line,
    lines: ReadonlyMap<string, Line>
): AnchorPoint | undefined => {
    const visited = new Set<string>()
    let current: Line | undefined = line
    while (current && !visited.has(current.id)) {
        visited.add(current.id)
        const source: LinePointData | undefined = current.points[0]
        if (source?.kind === 'anchorpoint') return source
        if (source?.kind !== 'branchpoint') return undefined
        current = [...lines.values()].find(
            (parent) =>
                parent.id !== current?.id &&
                parent.points
                    .slice(1)
                    .some(
                        (point) =>
                            point.kind === 'branchpoint' &&
                            point.id === source.id
                    )
        )
    }
    return undefined
}

export const zChartDocument = z
    .strictObject({
        version: z.int().positive(),
        positions: z.array(zOrgChartPosition),
        lines: z.array(zLine),
        branchPoints: z.array(zBranchPoint),
    })
    .superRefine((document, context) => {
        const positionsById = new Map<
            number,
            (typeof document.positions)[number]
        >()
        for (const [index, position] of document.positions.entries()) {
            if (positionsById.has(position.id))
                context.addIssue({
                    code: 'custom',
                    path: ['positions', index, 'id'],
                    message: `Duplicate position id ${position.id}`,
                })
            positionsById.set(position.id, position)
        }

        const lineIds = new Set<string>()
        const linesById = new Map(document.lines.map((line) => [line.id, line]))
        const pointIds = new Set<string>()
        const branchIds = new Set<string>()
        for (const [index, point] of document.branchPoints.entries()) {
            if (branchIds.has(point.id))
                context.addIssue({
                    code: 'custom',
                    path: ['branchPoints', index, 'id'],
                    message: `Duplicate branchpoint id ${point.id}`,
                })
            branchIds.add(point.id)
        }
        for (const branch of document.branchPoints) {
            const owners = document.lines.filter((line) =>
                line.points
                    .slice(1)
                    .some(
                        (point) =>
                            point.kind === 'branchpoint' &&
                            point.id === branch.id
                    )
            )
            const children = document.lines.filter(
                (line) =>
                    line.points[0]?.kind === 'branchpoint' &&
                    line.points[0].id === branch.id
            )
            const incomingEnds = owners.every(
                (owner) => owner.points.at(-1)?.id === branch.id
            )
            if (
                owners.length === 0 ||
                (children.length > 0 &&
                    (!incomingEnds || owners.length + children.length < 3)) ||
                (children.length === 0 &&
                    (owners.length !== 1 ||
                        owners[0]?.points.at(-1)?.id === branch.id))
            )
                context.addIssue({
                    code: 'custom',
                    path: ['branchPoints'],
                    message: `Branchpoint ${branch.id} must be an interior point or a junction joining at least three segments`,
                })
        }
        const cyclic = hasLineCycle(document.lines)
        for (const [index, line] of document.lines.entries()) {
            if (lineIds.has(line.id))
                context.addIssue({
                    code: 'custom',
                    path: ['lines', index, 'id'],
                    message: `Duplicate line id ${line.id}`,
                })
            lineIds.add(line.id)

            const error = lineError(line)
            if (error)
                context.addIssue({
                    code: 'custom',
                    path: ['lines', index],
                    message: error,
                })
            const source = line.points[0]
            const end = line.points.at(-1)
            if (end?.kind === 'branchpoint') {
                const outgoing = document.lines.filter((child) => {
                    const start = child.points[0]
                    return start?.kind === 'branchpoint' && start.id === end.id
                }).length
                if (
                    outgoing === 0 ||
                    (outgoing === 1 &&
                        incomingLineCount(end.id, document.lines) < 2)
                )
                    context.addIssue({
                        code: 'custom',
                        path: ['lines', index],
                        message:
                            'A junction must have two outgoing segments or merge two incoming segments',
                    })
            }
            if (source?.kind === 'branchpoint') {
                if (!error && (cyclic || !resolveLineSource(line, linesById)))
                    context.addIssue({
                        code: 'custom',
                        path: ['lines', index],
                        message: 'Branch lines cannot form a cycle',
                    })
            }

            for (const [pointIndex, point] of line.points.entries()) {
                if (point.kind === 'branchpoint') {
                    if (!branchIds.has(point.id))
                        context.addIssue({
                            code: 'custom',
                            path: ['lines', index, 'points', pointIndex],
                            message: `Unknown branchpoint ${point.id}`,
                        })
                    continue
                }
                if (branchIds.has(point.id))
                    context.addIssue({
                        code: 'custom',
                        path: ['lines', index, 'points', pointIndex, 'id'],
                        message: `Point id ${point.id} conflicts with a branchpoint`,
                    })
                if (pointIds.has(point.id))
                    context.addIssue({
                        code: 'custom',
                        path: ['lines', index, 'points', pointIndex, 'id'],
                        message: `Duplicate point id ${point.id}`,
                    })
                pointIds.add(point.id)
                if (point.kind !== 'anchorpoint') continue
                if (!positionsById.has(point.positionId))
                    context.addIssue({
                        code: 'custom',
                        path: [
                            'lines',
                            index,
                            'points',
                            pointIndex,
                            'positionId',
                        ],
                        message: `Unknown position ${point.positionId}`,
                    })
            }
        }

        for (const [index, position] of document.positions.entries()) {
            if (position.parentGroupId === undefined) continue
            const parent = positionsById.get(position.parentGroupId)
            if (!parent)
                context.addIssue({
                    code: 'custom',
                    path: ['positions', index, 'parentGroupId'],
                    message: `Unknown parent group ${position.parentGroupId}`,
                })
            else if (parent.type !== zPositionType.enum.GROUP)
                context.addIssue({
                    code: 'custom',
                    path: ['positions', index, 'parentGroupId'],
                    message: `Parent ${parent.id} is not a group`,
                })
            if (position.parentGroupId === position.id)
                context.addIssue({
                    code: 'custom',
                    path: ['positions', index, 'parentGroupId'],
                    message: 'A group cannot contain itself',
                })
        }

        const visit = (positionId: number, path: Set<number>): boolean => {
            if (path.has(positionId)) return true
            const parentId = positionsById.get(positionId)?.parentGroupId
            if (parentId === undefined || !positionsById.has(parentId))
                return false
            path.add(positionId)
            const cycle = visit(parentId, path)
            path.delete(positionId)
            return cycle
        }
        for (const [index, position] of document.positions.entries()) {
            if (
                position.parentGroupId !== undefined &&
                positionsById.has(position.parentGroupId) &&
                visit(position.id, new Set())
            )
                context.addIssue({
                    code: 'custom',
                    path: ['positions', index, 'parentGroupId'],
                    message: 'Group membership cannot contain a cycle',
                })
        }
    })
export type ChartDocument = z.infer<typeof zChartDocument>
