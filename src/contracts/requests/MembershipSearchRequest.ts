import z from 'zod'
import { zSearchRequest } from './SearchRequest.js'

export const zMembershipSearchRequest = zSearchRequest.extend({
    isBenefitEligible: z.boolean(),
    isMember: z.boolean()
})

export type MembershipSearchRequest = z.infer<typeof zMembershipSearchRequest>