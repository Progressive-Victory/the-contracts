import z from 'zod';
export declare const zLocation: z.ZodObject<{
    zip: z.ZodInt;
    city: z.ZodString;
    county: z.ZodString;
    state: z.ZodString;
}, z.core.$strip>;
export type Location = z.infer<typeof zLocation>;
//# sourceMappingURL=Location.d.ts.map