import { BackgroundColor, ElectionStatus, EndorsementType, InitiativeType } from '../../data/index.js';
import z from 'zod';
export declare const zCreateEndorsementRequest: z.ZodObject<{
    name: z.ZodString;
    state: z.ZodString;
    jurisiction: z.ZodNullable<z.ZodString>;
    endorsementDate: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    endorsementReason: z.ZodNullable<z.ZodString>;
    incumbent: z.ZodNullable<z.ZodBoolean>;
    handleHref: z.ZodNullable<z.ZodString>;
    handle: z.ZodString;
    bodyText: z.ZodString;
    websiteHref: z.ZodString;
    donateHref: z.ZodNullable<z.ZodString>;
    imgUrl: z.ZodString;
    isPvMember: z.ZodBoolean;
    primaryElection: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    generalElection: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    initiativeLevel: z.ZodEnum<typeof InitiativeType>;
    endorsementLevel: z.ZodEnum<typeof EndorsementType>;
    avatarBgColor: z.ZodEnum<typeof BackgroundColor>;
    electionStatus: z.ZodEnum<typeof ElectionStatus>;
}, z.core.$strip>;
export type CreateEndorsementRequest = z.infer<typeof zCreateEndorsementRequest>;
//# sourceMappingURL=CreateEndorsementRequest.d.ts.map