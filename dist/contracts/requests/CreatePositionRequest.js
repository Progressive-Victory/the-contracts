import z from 'zod';
import { zPositionTypes, zRelationship } from '../data/index.js';
export const zCreatePositionRequest = z.object({
    name: z.string().max(100),
    parentRelationships: z.array(zRelationship),
    positionType: zPositionTypes,
    seats: z.int(),
});
//# sourceMappingURL=CreatePositionRequest.js.map