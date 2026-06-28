import z from 'zod';
export declare const zCreateDiscordEventAttendeeRequest: z.ZodObject<{
    userDiscordId: z.ZodString;
    dateAttendedUtc: z.ZodCoercedDate<unknown>;
    isJoin: z.ZodBoolean;
}, z.core.$strip>;
export type CreateDiscordEventAttendeeRequest = z.infer<typeof zCreateDiscordEventAttendeeRequest>;
//# sourceMappingURL=CreateDiscordEventAttendeeRequest.d.ts.map