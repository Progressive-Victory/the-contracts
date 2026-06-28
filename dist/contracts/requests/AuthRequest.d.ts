import z from 'zod';
export declare const zAuthRequest: z.ZodObject<{
    discordToken: z.ZodString;
}, z.core.$strip>;
export type AuthRequest = z.infer<typeof zAuthRequest>;
//# sourceMappingURL=AuthRequest.d.ts.map