import z from 'zod';
export const zEndorsement = z.object({
    id: z.int(),
    candidateLink: z.string(),
    linkLabel: z.string(),
    description: z.string(),
    isStateInitiative: z.coerce.boolean(),
    isNationalInitiative: z.coerce.boolean(),
    isPvMember: z.coerce.boolean(),
    tookPvPledge: z.coerce.boolean(),
    imgUrl: z.string(),
    name: z.string(),
});
//# sourceMappingURL=Endorsement.js.map