import z from 'zod';
export const zCreateDiscordEventAttendeeRequest = z.object({
    userDiscordId: z.string().nonempty(),
    dateAttendedUtc: z.coerce.date(),
    isJoin: z.boolean(),
});
//# sourceMappingURL=CreateDiscordEventAttendeeRequest.js.map