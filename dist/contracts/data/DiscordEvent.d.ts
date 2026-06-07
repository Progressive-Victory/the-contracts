import z from 'zod';
export declare const zDiscordEvent: z.ZodObject<{
    id: z.ZodNumber;
    discordId: z.ZodString;
    channelId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<typeof import("./DiscordEventStatus").DiscordEventStatus>>;
    recurrent: z.ZodBoolean;
    userCount: z.ZodNullable<z.ZodNumber>;
    thumbnailUrl: z.ZodString;
    createdAtUtc: z.ZodCoercedDate<unknown>;
    creatorDiscordId: z.ZodString;
    scheduledStartUtc: z.ZodCoercedDate<unknown>;
    startedAtUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    scheduledEndUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    endedAtUtc: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    attendees: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userDiscordId: z.ZodString;
        eventId: z.ZodNumber;
        dateAttendedUtc: z.ZodCoercedDate<unknown>;
        isJoin: z.ZodBoolean;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DiscordEvent = z.infer<typeof zDiscordEvent>;
//# sourceMappingURL=DiscordEvent.d.ts.map