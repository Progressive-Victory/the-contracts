import z from 'zod';
export declare const zActBlueDonorLinkRequest: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    userId: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type ActBlueDonorLinkRequest = z.infer<typeof zActBlueDonorLinkRequest>;
//# sourceMappingURL=ActBlueDonorLinkRequest.d.ts.map