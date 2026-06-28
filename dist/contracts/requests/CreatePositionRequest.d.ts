import z from 'zod';
export declare const zCreatePositionRequest: z.ZodObject<{
    name: z.ZodString;
    parentIds: z.ZodArray<z.ZodInt>;
}, z.core.$strip>;
export type CreatePositionRequest = z.infer<typeof zCreatePositionRequest>;
//# sourceMappingURL=CreatePositionRequest.d.ts.map