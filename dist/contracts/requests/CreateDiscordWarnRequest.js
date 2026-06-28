import z from 'zod';
export const zCreateDiscordWarnRequest = z.object({
    mod_discord_id: z.string().nonempty(),
    tgt_discord_id: z.string().nonempty(),
    reason: z.string().nonempty(),
    expires_at_utc: z.coerce.date(),
});
//# sourceMappingURL=CreateDiscordWarnRequest.js.map