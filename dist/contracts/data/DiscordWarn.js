import z from 'zod';
export const zDiscordWarn = z.object({
    id: z.int(),
    userWarnedDiscordId: z.string(),
    moderatorDiscordId: z.string(),
    reason: z.string(),
    createdAtUtc: z.coerce.date(),
    expiresAtUtc: z.coerce.date(),
    updatedAtUtc: z.coerce.date().nullable(),
});
//# sourceMappingURL=DiscordWarn.js.map