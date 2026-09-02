import { BackgroundColor, ElectionStatus, EndorsementType, InitiativeType } from '../../data/index.js';
import z from 'zod';
export declare const zUpdateEndorsementRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    jurisiction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    endorsementDate: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    endorsementReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    handleHref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    handle: z.ZodOptional<z.ZodString>;
    bodyText: z.ZodOptional<z.ZodString>;
    websiteHref: z.ZodOptional<z.ZodString>;
    donateHref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imgUrl: z.ZodOptional<z.ZodString>;
    isPvMember: z.ZodOptional<z.ZodBoolean>;
    primaryElection: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    generalElection: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    initiativeLevel: z.ZodOptional<z.ZodEnum<typeof InitiativeType>>;
    endorsementLevel: z.ZodOptional<z.ZodEnum<typeof EndorsementType>>;
    avatarBgColor: z.ZodOptional<z.ZodEnum<typeof BackgroundColor>>;
    electionStatus: z.ZodOptional<z.ZodEnum<typeof ElectionStatus>>;
}, z.core.$strip>;
export type UpdateEndorsementRequest = z.infer<typeof zUpdateEndorsementRequest>;
//# sourceMappingURL=UpdateEndorsementRequest.d.ts.map