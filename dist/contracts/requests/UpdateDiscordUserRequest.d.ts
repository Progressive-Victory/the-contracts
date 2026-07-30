import z from "zod";
export declare const zUpdateDiscordUserRequest: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    discordUsername: z.ZodOptional<z.ZodString>;
    metaData: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    discordImage: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type UpdateDiscordUserRequest = z.infer<typeof zUpdateDiscordUserRequest>;
//# sourceMappingURL=UpdateDiscordUserRequest.d.ts.map