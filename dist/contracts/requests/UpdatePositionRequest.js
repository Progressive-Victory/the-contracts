import z from 'zod';
import { zPositionTypes, zRelationship } from '../data/index.js';
export const zUpdatePositionRequest = z.object({
    name: z.string().max(100).optional(),
    childRelationships: z.array(zRelationship).optional(),
    userIds: z.array(z.int()).optional(),
    positionType: zPositionTypes,
    seats: z.int(),
});
//# sourceMappingURL=UpdatePositionRequest.js.map