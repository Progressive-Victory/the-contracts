import z from 'zod';

export enum PositionTypes{
	POSITION = 0,
	GROUP = 1
}

export enum RelationshipTypes {
	OWNER = 0
}

export const zPositionTypes = z.enum(PositionTypes)

export const zRelationalTypes = z.enum(RelationshipTypes)

export const zPosition = z.object({
	id: z.int(),
	name: z.string(),
	childIds: z.array(z.int()),
	userIds: z.array(z.int()),
	type: zPositionTypes,
	seats: z.int()
});

export type Position = z.infer<typeof zPosition>;
