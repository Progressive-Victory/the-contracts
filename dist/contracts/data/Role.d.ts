import z from 'zod';
export declare const zRole: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
    permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        name: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Role = z.infer<typeof zRole>;
//# sourceMappingURL=Role.d.ts.map