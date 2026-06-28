import z from 'zod';
export declare const zPermission: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
}, z.core.$strip>;
export type Permission = z.infer<typeof zPermission>;
//# sourceMappingURL=Permission.d.ts.map