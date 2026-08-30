import z from 'zod';
export declare const zUpdateDiscordUserRequest: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    metaData: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    discordUsername: z.ZodOptional<z.ZodString>;
    discordImage: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type UpdateDiscordUserRequest = z.infer<typeof zUpdateDiscordUserRequest>;
//# sourceMappingURL=UpdateDiscordUserRequest.d.ts.map