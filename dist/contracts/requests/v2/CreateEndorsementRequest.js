import { BackgroundColor, ElectionStatus, EndorsementType, InitiativeType, } from '../../data/index.js';
import z from 'zod';
export const zCreateEndorsementRequest = z.object({
    name: z.string().nonempty().max(100),
    state: z.string().nonempty().max(36),
    jurisiction: z.string().nullable(),
    endorsementDate: z.coerce.date().nullable(),
    endorsementReason: z.string().nullable(),
    handleHref: z.string().max(200).nullable(),
    handle: z.string().max(50),
    bodyText: z.string().nonempty().max(300),
    websiteHref: z.string(),
    donateHref: z.string().nullable(),
    imgUrl: z.string().max(200),
    isStateInitiative: z.boolean(),
    isNationalInitiative: z.boolean(),
    isPvMember: z.boolean(),
    primaryElection: z.coerce.date().nullable(),
    generalElection: z.coerce.date().nullable(),
    initiativeLevel: z.enum(InitiativeType),
    endorsementLevel: z.enum(EndorsementType),
    avatarBgColor: z.enum(BackgroundColor),
    electionStatus: z.enum(ElectionStatus),
});
//# sourceMappingURL=CreateEndorsementRequest.js.map