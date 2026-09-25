import { zPermission, zPositionTypes, zRelationship } from '../data/index.js';
import z from 'zod';
export const zCreatePositionRequest = z.object({
    name: z.string().max(100),
    parentRelationships: z.array(zRelationship),
    positionType: zPositionTypes,
    seats: z.int(),
    permission: z.array(zPermission)
});
//# sourceMappingURL=CreatePositionRequest.js.map