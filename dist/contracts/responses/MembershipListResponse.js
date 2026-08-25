import z from 'zod';
import { zActBlueDonor, zUser } from '../data/index.js';
export const zMembershipListResponse = z.object({
    memberships: z.array(z.object({
        donor: zActBlueDonor,
        user: zUser.nullable()
    }))
});
//# sourceMappingURL=MembershipListResponse.js.map