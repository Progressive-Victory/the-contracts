import z from 'zod';
export declare const zDiscordEventOccurrence: z.ZodObject<{
    id: z.ZodNumber;
    channelId: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordEventStatus.js").DiscordEventStatus>>;
    thumbnailUrl: z.ZodNullable<z.ZodString>;
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
        discordUser: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            username: z.ZodString;
            image: z.ZodString;
            userId: z.ZodNullable<z.ZodNumber>;
            email: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordUser.js").DiscordUserStatus>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DiscordEventOccurrence = z.infer<typeof zDiscordEventOccurrence>;
export declare const zDiscordEventWithOccurrences: z.ZodObject<{
    id: z.ZodNumber;
    discordId: z.ZodString;
    recurrent: z.ZodBoolean;
    userCount: z.ZodNullable<z.ZodNumber>;
    createdAtUtc: z.ZodCoercedDate<unknown>;
    creatorDiscordId: z.ZodString;
    occurrences: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        channelId: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordEventStatus.js").DiscordEventStatus>>;
        thumbnailUrl: z.ZodNullable<z.ZodString>;
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
            discordUser: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                username: z.ZodString;
                image: z.ZodString;
                userId: z.ZodNullable<z.ZodNumber>;
                email: z.ZodNullable<z.ZodString>;
                status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordUser.js").DiscordUserStatus>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DiscordEventWithOccurrences = z.infer<typeof zDiscordEventWithOccurrences>;
export declare const zDiscordEventDetailsResponse: z.ZodObject<{
    event: z.ZodObject<{
        id: z.ZodNumber;
        discordId: z.ZodString;
        recurrent: z.ZodBoolean;
        userCount: z.ZodNullable<z.ZodNumber>;
        createdAtUtc: z.ZodCoercedDate<unknown>;
        creatorDiscordId: z.ZodString;
        occurrences: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            channelId: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordEventStatus.js").DiscordEventStatus>>;
            thumbnailUrl: z.ZodNullable<z.ZodString>;
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
                discordUser: z.ZodOptional<z.ZodObject<{
                    id: z.ZodString;
                    username: z.ZodString;
                    image: z.ZodString;
                    userId: z.ZodNullable<z.ZodNumber>;
                    email: z.ZodNullable<z.ZodString>;
                    status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordUser.js").DiscordUserStatus>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    createdBy: z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        image: z.ZodString;
        userId: z.ZodNullable<z.ZodNumber>;
        email: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordUser.js").DiscordUserStatus>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type DiscordEventDetailsResponse = z.infer<typeof zDiscordEventDetailsResponse>;
//# sourceMappingURL=DiscordEventDetailsResponse.d.ts.map