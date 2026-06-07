import z from 'zod';
export declare const zDiscordEventAttendee: z.ZodObject<{
    id: z.ZodNumber;
    userDiscordId: z.ZodString;
    eventId: z.ZodNumber;
    dateAttendedUtc: z.ZodCoercedDate<unknown>;
    isJoin: z.ZodBoolean;
}, z.core.$strip>;
export type DiscordEventAttendee = z.infer<typeof zDiscordEventAttendee>;
//# sourceMappingURL=DiscordEventAttendee.d.ts.map