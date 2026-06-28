import z from 'zod';
export declare const zPosition: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
    childIds: z.ZodArray<z.ZodInt>;
    userIds: z.ZodArray<z.ZodInt>;
}, z.core.$strip>;
export type Position = z.infer<typeof zPosition>;
//# sourceMappingURL=Position.d.ts.map