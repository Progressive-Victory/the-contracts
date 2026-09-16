import z from 'zod';
import { zSearchRequest } from './SearchRequest.js';
export const zMembershipSearchRequest = zSearchRequest.extend({
    isBenefitEligible: z.boolean(),
    isMember: z.boolean()
});
//# sourceMappingURL=MembershipSearchRequest.js.map