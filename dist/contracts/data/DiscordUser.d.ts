import z from 'zod';
export declare const zDiscordUser: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    image: z.ZodString;
    userId: z.ZodNullable<z.ZodNumber>;
    email: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DiscordUser = z.infer<typeof zDiscordUser>;
//# sourceMappingURL=DiscordUser.d.ts.map