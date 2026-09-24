import { zPositionTypes, zRelationship } from '../data/index.js';
import z from 'zod';

export const zUpdatePositionRequest = z.object({
	name: z.string().max(100).optional(),
	childRelationships: z.array(zRelationship).optional(),
	userIds: z.array(z.int()).optional(),
	positionType: zPositionTypes,
	seats: z.int(),
});

export type UpdatePositionRequest = z.infer<typeof zUpdatePositionRequest>;
