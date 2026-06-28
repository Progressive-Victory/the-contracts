import z from 'zod';
export declare const zUserProfile: z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodNullable<z.ZodString>;
    preferredName: z.ZodNullable<z.ZodString>;
    firstName: z.ZodNullable<z.ZodString>;
    lastName: z.ZodNullable<z.ZodString>;
    aliases: z.ZodArray<z.ZodString>;
    discordUsers: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        image: z.ZodString;
        userId: z.ZodNullable<z.ZodNumber>;
        email: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UserProfile = z.infer<typeof zUserProfile>;
//# sourceMappingURL=UserProfile.d.ts.map