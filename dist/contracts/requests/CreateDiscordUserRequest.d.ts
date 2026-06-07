import z from 'zod';
export declare const zCreateDiscordUserRequest: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    discordId: z.ZodString;
    discordUsername: z.ZodString;
    discordImage: z.ZodString;
    userId: z.ZodCoercedNumber<unknown>;
    email: z.ZodString;
}, z.core.$strip>;
export type CreateDiscordUserRequest = z.infer<typeof zCreateDiscordUserRequest>;
//# sourceMappingURL=CreateDiscordUserRequest.d.ts.map