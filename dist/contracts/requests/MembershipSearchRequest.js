import z from 'zod';
import { zSearchRequest } from './SearchRequest.js';
export const zMembershipSearchRequest = zSearchRequest.extend({
    isBenefitEligible: z.boolean().nullable(),
    isMember: z.boolean().nullable()
});
//# sourceMappingURL=MembershipSearchRequest.js.map