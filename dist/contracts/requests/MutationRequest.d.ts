import z from 'zod';
export declare const zMutationRequest: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type BaseRequest = z.infer<typeof zMutationRequest>;
//# sourceMappingURL=MutationRequest.d.ts.map