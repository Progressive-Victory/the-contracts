import { zPositionTypes, zRelationship } from '../data/index.js';
import z from 'zod';
export const zCreatePositionRequest = z.object({
    name: z.string().max(100),
    parentRelationships: z.array(zRelationship),
    positionType: zPositionTypes,
    seats: z.int(),
});
//# sourceMappingURL=CreatePositionRequest.js.map