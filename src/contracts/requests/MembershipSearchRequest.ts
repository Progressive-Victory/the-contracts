import { zBoolQuery } from '../../util/types.js';
import { zSearchRequest } from './SearchRequest.js';
import z from 'zod';

export const zMembershipSearchRequest = zSearchRequest.extend({
	isBenefitEligible: zBoolQuery,
	isMember: zBoolQuery,
});

export type MembershipSearchRequest = z.infer<typeof zMembershipSearchRequest>;
