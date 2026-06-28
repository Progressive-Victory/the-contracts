import z from 'zod';
export declare const zCreateDiscordWarnRequest: z.ZodObject<{
    mod_discord_id: z.ZodString;
    tgt_discord_id: z.ZodString;
    reason: z.ZodString;
    expires_at_utc: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export type CreateDiscordWarnRequest = z.infer<typeof zCreateDiscordWarnRequest>;
//# sourceMappingURL=CreateDiscordWarnRequest.d.ts.map