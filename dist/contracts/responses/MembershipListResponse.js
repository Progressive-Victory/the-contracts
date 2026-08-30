import { zActBlueDonor, zUser } from '../data/index.js';
import z from 'zod';
export const zMembershipListResponse = z.object({
    memberships: z.array(z.object({
        donor: zActBlueDonor,
        customField: z.object({
            label: z.string(),
            answer: z.string()
        }).nullable(),
        user: zUser.nullable(),
    })),
});
//# sourceMappingURL=MembershipListResponse.js.map