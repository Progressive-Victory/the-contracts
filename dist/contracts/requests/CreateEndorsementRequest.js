import { AvatarBgColor, ElectionStatus, EndorsementType, InitiativeType, } from '../data/index.js';
import z from 'zod';
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
    initiativeLevel: z.enum(InitiativeType).nullable().default(null),
    endorsementLevel: z
        .enum(EndorsementType)
        .default(EndorsementType.Endorsement),
    avatarBgColor: z.enum(AvatarBgColor).default(AvatarBgColor.Blue),
    electionStatus: z.enum(ElectionStatus).nullable().default(null),
});
//# sourceMappingURL=CreateEndorsementRequest.js.map