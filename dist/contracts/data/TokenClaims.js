import z from 'zod';
export const zTokenClaims = z.object({
    userId: z.int(),
    discordUserId: z.string(),
    permissions: z.array(z.int()),
});
//# sourceMappingURL=TokenClaims.js.map