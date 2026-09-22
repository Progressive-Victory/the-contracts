import z from 'zod';

export enum PositionTypes{
	POSITION = 0,
	GROUP = 1
}

export enum RelationshipTypes {
	OWNER = 0
}

export const zPositionTypes = z.enum(PositionTypes)

export const zRelationshipTypes = z.enum(RelationshipTypes)

export const zRelationship = z.object({
	id: z.int(),
	relationshipType: zRelationshipTypes
})

export const zPosition = z.object({
	id: z.int(),
	name: z.string(),
	childIds: z.array(zRelationship),
	userIds: z.array(z.int()),
	type: zPositionTypes,
	seats: z.int()
});

export type Position = z.infer<typeof zPosition>;
