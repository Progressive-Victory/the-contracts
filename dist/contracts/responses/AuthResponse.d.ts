import z from 'zod';
export declare const zAuthResponse: z.ZodObject<{
    accessToken: z.ZodString;
}, z.core.$strip>;
export type AuthResponse = z.infer<typeof zAuthResponse>;
//# sourceMappingURL=AuthResponse.d.ts.map