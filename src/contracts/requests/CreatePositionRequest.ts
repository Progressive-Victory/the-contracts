import z from 'zod';
import { zPositionTypes, zRelationshipTypes } from '../data/index.js';

export const zCreatePositionRequest = z.object({
	name: z.string().max(100),
	parentIds: z.array(z.int()),
	positionType: zPositionTypes,
	seats: z.int(),
	relationshipType: zRelationshipTypes
});

export type CreatePositionRequest = z.infer<typeof zCreatePositionRequest>;
