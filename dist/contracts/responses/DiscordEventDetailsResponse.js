import { zDiscordEvent, zDiscordEventAttendee, zDiscordEventStatus, zDiscordUser, } from '../data/index.js';
import z from 'zod';
export const zDiscordEventOccurrence = z.object({
    id: z.number(),
    channelId: z.string().nonempty(),
    name: z.string().nonempty(),
    description: z.string().nullable(),
    status: zDiscordEventStatus.nullable(),
    thumbnailUrl: z.string().nonempty().nullable(),
    scheduledStartUtc: z.coerce.date(),
    startedAtUtc: z.coerce.date().nullable(),
    scheduledEndUtc: z.coerce.date().nullable(),
    endedAtUtc: z.coerce.date().nullable(),
    attendees: z.array(zDiscordEventAttendee).optional(),
});
export const zDiscordEventWithOccurrences = z.object({
    id: z.number(),
    discordId: z.string().nonempty(),
    recurrent: z.boolean(),
    userCount: z.number().nullable(),
    createdAtUtc: z.coerce.date(),
    creatorDiscordId: z.string().nonempty(),
    occurrences: z.array(zDiscordEventOccurrence),
});
export const zDiscordEventDetailsResponse = z.object({
    event: z.xor([zDiscordEvent, zDiscordEventWithOccurrences]),
    createdBy: zDiscordUser,
});
//# sourceMappingURL=DiscordEventDetailsResponse.js.map