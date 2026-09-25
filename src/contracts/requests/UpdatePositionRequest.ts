import { zPermission, zPositionTypes, zRelationship } from '../data/index.js';
import z from 'zod';

export const zUpdatePositionRequest = z.object({
	name: z.string().max(100).optional(),
	childRelationships: z.array(zRelationship).optional(),
	userIds: z.array(z.int()).optional(),
	positionType: zPositionTypes.optional(),
	seats: z.int().optional(),
	permissions: z.array(zPermission).optional()
});

export type UpdatePositionRequest = z.infer<typeof zUpdatePositionRequest>;
