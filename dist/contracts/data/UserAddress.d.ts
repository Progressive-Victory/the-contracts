import z from 'zod';
export declare const zUserAddress: z.ZodObject<{
    addressLine1: z.ZodNullable<z.ZodString>;
    addressLine2: z.ZodNullable<z.ZodString>;
    city: z.ZodNullable<z.ZodString>;
    county: z.ZodNullable<z.ZodString>;
    state: z.ZodNullable<z.ZodString>;
    zip: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type UserAddress = z.infer<typeof zUserAddress>;
//# sourceMappingURL=UserAddress.d.ts.map