import z from 'zod';
export declare const zEndorsement: z.ZodObject<{
    id: z.ZodInt;
    candidateLink: z.ZodString;
    linkLabel: z.ZodString;
    description: z.ZodString;
    isStateInitiative: z.ZodCoercedBoolean<unknown>;
    isNationalInitiative: z.ZodCoercedBoolean<unknown>;
    isPvMember: z.ZodCoercedBoolean<unknown>;
    tookPvPledge: z.ZodCoercedBoolean<unknown>;
    imgUrl: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type Endorsement = z.infer<typeof zEndorsement>;
//# sourceMappingURL=Endorsement.d.ts.map