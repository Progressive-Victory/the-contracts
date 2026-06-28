import z from 'zod';
// TODO: probably should default to null for candidate_link, link_label, and img_url instead of empty string.
// needs to update SQL schema and endorsementsService.createEndorsement for this.
export const zCreateEndorsementRequest = z.object({
    name: z.string().nonempty().max(100),
    state: z.string().nonempty().max(13),
    description: z.string().nonempty().max(300),
    candidateLink: z.string().max(200).default(''),
    linkLabel: z.string().max(50).default(''),
    imgUrl: z.string().max(200).default(''),
    isStateInitiative: z.boolean().default(false),
    isNationalInitiative: z.boolean().default(false),
    isPvMember: z.boolean().default(false),
    tookPvPledge: z.boolean().default(false),
    primaryElection: z.coerce.date().nullable().default(null),
    generalElection: z.coerce.date().nullable().default(null),
    initiativeType: z.string().max(20).default(''),
    endorsementType: z.string().max(20).default(''),
    avatarBackgroundColor: z.string().max(20).default(''),
    electionStatus: z.string().max(20).default(''),
});
//# sourceMappingURL=CreateEndorsementRequest.js.map