import z from 'zod';
export declare const zTokenClaims: z.ZodObject<{
    userId: z.ZodInt;
    discordUserId: z.ZodString;
    permissions: z.ZodArray<z.ZodInt>;
}, z.core.$strip>;
export type TokenClaims = z.infer<typeof zTokenClaims>;
//# sourceMappingURL=TokenClaims.d.ts.map