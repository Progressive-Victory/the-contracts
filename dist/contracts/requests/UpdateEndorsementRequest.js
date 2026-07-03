import z from 'zod';
// This is not meaningfully different than CreateEndorsementRequest which isn't meaningfully different than Endorsement
// So edit all three, as I doubt there's a way to eliminate redundancy
export const zUpdateEndorsementRequest = z.object({
    name: z.string().nonempty().max(100).optional(),
    state: z.string().nonempty().max(36).optional(),
    description: z.string().nonempty().max(300).optional(),
    candidateLink: z.string().max(200).optional(),
    linkLabel: z.string().max(50).optional(),
    imgUrl: z.string().max(200).optional(),
    isStateInitiative: z.boolean().optional(),
    isNationalInitiative: z.boolean().optional(),
    isPvMember: z.boolean().optional(),
    tookPvPledge: z.boolean().optional(),
    primaryElection: z.coerce.date().nullable().optional(),
    generalElection: z.coerce.date().nullable().optional(),
    initiativeLevel: z.string().max(32).optional(),
    endorsementLevel: z.string().max(32).optional(),
    avatarBgColor: z.string().max(32).optional(),
    electionStatus: z.string().max(32).nullable().optional(),
});
//# sourceMappingURL=UpdateEndorsementRequest.js.map