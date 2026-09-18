import { zSearchRequest } from './SearchRequest.js';
import { zBoolQuery } from '../../util/types.js';
export const zMembershipSearchRequest = zSearchRequest.extend({
    isBenefitEligible: zBoolQuery,
    isMember: zBoolQuery
});
//# sourceMappingURL=MembershipSearchRequest.js.map