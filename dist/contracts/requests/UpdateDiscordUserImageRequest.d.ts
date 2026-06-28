import z from 'zod';
export declare const zUpdateDiscordUserImageRequest: z.ZodObject<{
    userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
    dataSource: z.ZodOptional<z.ZodString>;
    discordImage: z.ZodString;
}, z.core.$strict>;
export type UpdateDiscordUserImageRequest = z.infer<typeof zUpdateDiscordUserImageRequest>;
//# sourceMappingURL=UpdateDiscordUserImageRequest.d.ts.map