import z from 'zod';
export const zDiscordUser = z.object({
    id: z.string(),
    username: z.string(),
    image: z.string(),
    userId: z.number().nullable(),
    email: z.string().nullable(),
});
//# sourceMappingURL=DiscordUser.js.map