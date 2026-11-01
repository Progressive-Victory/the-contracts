import z from 'zod';
export declare const zOrgChartVersion: z.ZodObject<{
    versionNumber: z.ZodNumber;
    fileHref: z.ZodString;
}, z.core.$strip>;
export type OrgChartVersion = z.infer<typeof zOrgChartVersion>;
export declare const zHandleSide: z.ZodEnum<{
    top: "top";
    right: "right";
    bottom: "bottom";
    left: "left";
}>;
export type HandleSide = z.infer<typeof zHandleSide>;
export declare enum PositionType {
    POSITION = 0,
    GROUP = 1
}
export declare const zOrgChartPosition: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    coordinates: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>>;
    type: z.ZodEnum<typeof PositionType>;
    seats: z.ZodNullable<z.ZodNumber>;
    userIds: z.ZodArray<z.ZodNumber>;
    permissions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        name: z.ZodString;
    }, z.core.$strip>>>;
    parentGroupId: z.ZodOptional<z.ZodNumber>;
    groupBounds: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type OrgChartPosition = z.infer<typeof zOrgChartPosition>;
export declare const zAnchorPoint: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodLiteral<"anchorpoint">;
    positionId: z.ZodNumber;
    handle: z.ZodEnum<{
        top: "top";
        right: "right";
        bottom: "bottom";
        left: "left";
    }>;
}, z.core.$strict>;
export type AnchorPoint = z.infer<typeof zAnchorPoint>;
export declare const zWaypoint: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodLiteral<"waypoint">;
    coordinates: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type Waypoint = z.infer<typeof zWaypoint>;
declare const zBranchPointReference: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodLiteral<"branchpoint">;
}, z.core.$strict>;
export type BranchPointReference = z.infer<typeof zBranchPointReference>;
declare const zBranchPoint: z.ZodObject<{
    id: z.ZodString;
    coordinates: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type BranchPoint = z.infer<typeof zBranchPoint>;
export type LinePointData = AnchorPoint | Waypoint | BranchPointReference;
export type ResolvedBranchPoint = BranchPointReference & Pick<BranchPoint, "coordinates">;
export declare const zLine: z.ZodObject<{
    id: z.ZodString;
    points: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodLiteral<"anchorpoint">;
        positionId: z.ZodNumber;
        handle: z.ZodEnum<{
            top: "top";
            right: "right";
            bottom: "bottom";
            left: "left";
        }>;
    }, z.core.$strict>, z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodLiteral<"waypoint">;
        coordinates: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodLiteral<"branchpoint">;
    }, z.core.$strict>], "kind">>;
}, z.core.$strict>;
export type Line = z.infer<typeof zLine>;
export declare const zChartDocument: z.ZodObject<{
    version: z.ZodInt;
    positions: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        coordinates: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>>;
        type: z.ZodEnum<typeof PositionType>;
        seats: z.ZodNullable<z.ZodNumber>;
        userIds: z.ZodArray<z.ZodNumber>;
        permissions: z.ZodDefault<z.ZodArray<z.ZodObject<{
            id: z.ZodInt;
            name: z.ZodString;
        }, z.core.$strip>>>;
        parentGroupId: z.ZodOptional<z.ZodNumber>;
        groupBounds: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    lines: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        points: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodLiteral<"anchorpoint">;
            positionId: z.ZodNumber;
            handle: z.ZodEnum<{
                top: "top";
                right: "right";
                bottom: "bottom";
                left: "left";
            }>;
        }, z.core.$strict>, z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodLiteral<"waypoint">;
            coordinates: z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strict>;
        }, z.core.$strict>, z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodLiteral<"branchpoint">;
        }, z.core.$strict>], "kind">>;
    }, z.core.$strict>>;
    branchPoints: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        coordinates: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type ChartDocument = z.infer<typeof zChartDocument>;
export {};
//# sourceMappingURL=OrgChart.d.ts.map