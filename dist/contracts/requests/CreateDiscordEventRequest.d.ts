import z from 'zod';
export declare const zCreateDiscordEventRequest: z.ZodObject<{
    discordId: z.ZodString;
    channelId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordEventStatus.js").DiscordEventStatus>>;
    recurrent: z.ZodBoolean;
    userCount: z.ZodNullable<z.ZodNumber>;
    thumbnailUrl: z.ZodNullable<z.ZodString>;
    createdAtUtc: z.ZodCoercedDate<unknown>;
    creatorDiscordId: z.ZodString;
    scheduledStartUtc: z.ZodCoercedDate<unknown>;
    startedAtUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    scheduledEndUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    endedAtUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export type CreateDiscordEventRequest = z.infer<typeof zCreateDiscordEventRequest>;
//# sourceMappingURL=CreateDiscordEventRequest.d.ts.map