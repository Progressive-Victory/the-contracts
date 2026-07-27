import { BackgroundColor, ElectionStatus, EndorsementType, InitiativeType } from '../data/index.js';
import z from 'zod';
export declare const zUpdateEndorsementRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    candidateLink: z.ZodOptional<z.ZodString>;
    linkLabel: z.ZodOptional<z.ZodString>;
    imgUrl: z.ZodOptional<z.ZodString>;
    isStateInitiative: z.ZodOptional<z.ZodBoolean>;
    isNationalInitiative: z.ZodOptional<z.ZodBoolean>;
    isPvMember: z.ZodOptional<z.ZodBoolean>;
    tookPvPledge: z.ZodOptional<z.ZodBoolean>;
    primaryElection: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    generalElection: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    initiativeLevel: z.ZodOptional<z.ZodEnum<typeof InitiativeType>>;
    endorsementLevel: z.ZodOptional<z.ZodEnum<typeof EndorsementType>>;
    avatarBgColor: z.ZodOptional<z.ZodEnum<typeof BackgroundColor>>;
    electionStatus: z.ZodOptional<z.ZodEnum<typeof ElectionStatus>>;
}, z.core.$strip>;
export type UpdateEndorsementRequest = z.infer<typeof zUpdateEndorsementRequest>;
//# sourceMappingURL=UpdateEndorsementRequest.d.ts.map