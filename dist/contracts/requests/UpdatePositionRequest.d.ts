import z from 'zod';
export declare const zUpdatePositionRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    childIds: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    userIds: z.ZodOptional<z.ZodArray<z.ZodInt>>;
}, z.core.$strip>;
export type UpdatePositionRequest = z.infer<typeof zUpdatePositionRequest>;
//# sourceMappingURL=UpdatePositionRequest.d.ts.map