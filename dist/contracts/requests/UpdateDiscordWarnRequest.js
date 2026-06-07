import z from 'zod';
export const zUpdateDiscordWarnRequest = z.object({
    warn_id: z.coerce.number(),
    reason: z.string().nonempty().optional(),
    expires_at_utc: z.coerce.date().optional(),
});
//# sourceMappingURL=UpdateDiscordWarnRequest.js.map