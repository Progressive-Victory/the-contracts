import z from 'zod';
import { zPositionTypes, zRelationshipTypes } from '../data/index.js';

export const zUpdatePositionRequest = z.object({
	name: z.string().max(100).optional(),
	childIds: z.array(z.int()).optional(),
	userIds: z.array(z.int()).optional(),
	positionType: zPositionTypes,
	seats: z.int(),
	relationshipType: zRelationshipTypes
});

export type UpdatePositionRequest = z.infer<typeof zUpdatePositionRequest>;
