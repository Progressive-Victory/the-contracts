import { zActBlueDonor, zUser } from '../data/index.js';
import z from 'zod';
export const zMembershipsResponsePacket = z.object({
    donor: zActBlueDonor,
    customField: z.object({
        label: z.string(),
        answer: z.string()
    }).nullable(),
    user: zUser.nullable(),
});
//# sourceMappingURL=MembershipListResponse.js.map