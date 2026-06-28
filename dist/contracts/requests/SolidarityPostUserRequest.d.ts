import z from 'zod';
export declare const zSolidarityPostUserRequest: z.ZodObject<{
    phone_number: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    first_name: z.ZodNullable<z.ZodString>;
    last_name: z.ZodNullable<z.ZodString>;
    preferred_language: z.ZodString;
    chapter_id: z.ZodNullable<z.ZodInt>;
    chapter_ids: z.ZodNullable<z.ZodArray<z.ZodNullable<z.ZodInt>>>;
    custom_user_properties: z.ZodNullable<z.ZodObject<{
        discord_id: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    address: z.ZodNullable<z.ZodObject<{
        city: z.ZodNullable<z.ZodString>;
        state: z.ZodNullable<z.ZodString>;
        zip_code: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SolidarityPostUserRequest = z.infer<typeof zSolidarityPostUserRequest>;
//# sourceMappingURL=SolidarityPostUserRequest.d.ts.map