import z from 'zod';
export declare const zDiscordWarn: z.ZodObject<{
    id: z.ZodInt;
    userWarnedDiscordId: z.ZodString;
    moderatorDiscordId: z.ZodString;
    reason: z.ZodString;
    createdAtUtc: z.ZodCoercedDate<unknown>;
    expiresAtUtc: z.ZodCoercedDate<unknown>;
    updatedAtUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export type DiscordWarn = z.infer<typeof zDiscordWarn>;
//# sourceMappingURL=DiscordWarn.d.ts.map