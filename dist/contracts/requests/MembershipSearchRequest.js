import { zBoolQuery } from '../../util/types.js';
import { zSearchRequest } from './SearchRequest.js';
export const zMembershipSearchRequest = zSearchRequest.extend({
    isBenefitEligible: zBoolQuery,
    isMember: zBoolQuery,
});
//# sourceMappingURL=MembershipSearchRequest.js.map