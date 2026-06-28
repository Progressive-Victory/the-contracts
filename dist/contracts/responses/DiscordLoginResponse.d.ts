import z from 'zod';
export declare const zDiscordLoginResponse: z.ZodObject<{
    redirectUri: z.ZodString;
}, z.core.$strip>;
export type DiscordLoginResponse = z.infer<typeof zDiscordLoginResponse>;
//# sourceMappingURL=DiscordLoginResponse.d.ts.map