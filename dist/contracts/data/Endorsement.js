import z from 'zod';
export const zEndorsement = z.object({
    id: z.int(),
    name: z.string(),
    state: z.string(),
    candidateLink: z.string(),
    linkLabel: z.string(),
    description: z.string(),
    isStateInitiative: z.coerce.boolean(),
    isNationalInitiative: z.coerce.boolean(),
    isPvMember: z.coerce.boolean(),
    tookPvPledge: z.coerce.boolean(),
    imgUrl: z.string(),
    primaryElection: z.coerce.date(),
    generalElection: z.coerce.date(),
    initiativeType: z.string(),
    endorsementType: z.string(),
    avatarBackgroundColor: z.string(),
    electionStatus: z.string(),
});
//# sourceMappingURL=Endorsement.js.map