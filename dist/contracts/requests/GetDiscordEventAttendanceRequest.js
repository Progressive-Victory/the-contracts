import z from 'zod';
export const zGetDiscordEventAttendanceRequest = z.object({
    event_id: z.coerce.number(),
});
//# sourceMappingURL=GetDiscordEventAttendanceRequest.js.map