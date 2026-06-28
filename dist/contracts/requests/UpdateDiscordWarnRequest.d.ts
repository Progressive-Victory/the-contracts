import z from 'zod';
export declare const zUpdateDiscordWarnRequest: z.ZodObject<{
    warn_id: z.ZodCoercedNumber<unknown>;
    reason: z.ZodOptional<z.ZodString>;
    expires_at_utc: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export type UpdateDiscordWarnRequest = z.infer<typeof zUpdateDiscordWarnRequest>;
//# sourceMappingURL=UpdateDiscordWarnRequest.d.ts.map