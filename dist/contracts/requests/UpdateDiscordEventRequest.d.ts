import z from 'zod';
export declare const zUpdateDiscordEventRequest: z.ZodObject<{
    channelId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../data").DiscordEventStatus>>>;
    userCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    scheduledStartUtc: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    startedAtUtc: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    scheduledEndUtc: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    endedAtUtc: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
export type UpdateDiscordEventRequest = z.infer<typeof zUpdateDiscordEventRequest>;
//# sourceMappingURL=UpdateDiscordEventRequest.d.ts.map