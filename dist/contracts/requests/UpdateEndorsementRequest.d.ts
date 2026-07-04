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
    initiativeLevel: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    endorsementLevel: z.ZodOptional<z.ZodString>;
    avatarBgColor: z.ZodOptional<z.ZodString>;
    electionStatus: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateEndorsementRequest = z.infer<typeof zUpdateEndorsementRequest>;
//# sourceMappingURL=UpdateEndorsementRequest.d.ts.map