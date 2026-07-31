import z from 'zod';
import { zDiscordUser } from './DiscordUser.js';
export const zDiscordEventAttendee = z.object({
    id: z.number(),
    userDiscordId: z.string().nonempty(),
    eventId: z.number(),
    dateAttendedUtc: z.coerce.date(),
    isJoin: z.boolean(),
    discordUser: zDiscordUser.optional(),
});
//# sourceMappingURL=DiscordEventAttendee.js.map