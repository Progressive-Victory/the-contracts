import z from 'zod';
export declare const zCreateEndorsementRequest: z.ZodObject<{
    name: z.ZodString;
    state: z.ZodString;
    description: z.ZodString;
    candidateLink: z.ZodDefault<z.ZodString>;
    linkLabel: z.ZodDefault<z.ZodString>;
    imgUrl: z.ZodDefault<z.ZodString>;
    isStateInitiative: z.ZodDefault<z.ZodBoolean>;
    isNationalInitiative: z.ZodDefault<z.ZodBoolean>;
    isPvMember: z.ZodDefault<z.ZodBoolean>;
    tookPvPledge: z.ZodDefault<z.ZodBoolean>;
    primaryElection: z.ZodDefault<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    generalElection: z.ZodDefault<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    initiativeType: z.ZodDefault<z.ZodString>;
    endorsementType: z.ZodDefault<z.ZodString>;
    avatarBackgroundColor: z.ZodDefault<z.ZodString>;
    electionStatus: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type CreateEndorsementRequest = z.infer<typeof zCreateEndorsementRequest>;
//# sourceMappingURL=CreateEndorsementRequest.d.ts.map