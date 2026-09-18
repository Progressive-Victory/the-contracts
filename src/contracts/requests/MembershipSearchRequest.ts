import z from 'zod'
import { zSearchRequest } from './SearchRequest.js'
import { zBoolQuery } from '../../util/types.js'

export const zMembershipSearchRequest = zSearchRequest.extend({
    isBenefitEligible: zBoolQuery,
    isMember: zBoolQuery
})

export type MembershipSearchRequest = z.infer<typeof zMembershipSearchRequest>