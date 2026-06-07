import z from 'zod';
export declare const zCreateEndorsementRequest: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    candidateLink: z.ZodDefault<z.ZodString>;
    linkLabel: z.ZodDefault<z.ZodString>;
    imgUrl: z.ZodDefault<z.ZodString>;
    isStateInitiative: z.ZodDefault<z.ZodBoolean>;
    isNationalInitiative: z.ZodDefault<z.ZodBoolean>;
    isPvMember: z.ZodDefault<z.ZodBoolean>;
    tookPvPledge: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateEndorsementRequest = z.infer<typeof zCreateEndorsementRequest>;
//# sourceMappingURL=CreateEndorsementRequest.d.ts.map