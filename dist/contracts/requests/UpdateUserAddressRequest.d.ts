import z from 'zod';
export declare const zUpdateUserAddressRequest: z.ZodObject<{
    addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    county: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    zip: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export type UpdateUserAddressRequest = z.infer<typeof zUpdateUserAddressRequest>;
//# sourceMappingURL=UpdateUserAddressRequest.d.ts.map