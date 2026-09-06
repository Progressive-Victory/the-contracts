import z from 'zod';
export declare const zDiscordEventAttendee: z.ZodObject<{
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
        status: z.ZodNullable<z.ZodEnum<typeof import("./DiscordUser.js").DiscordServerStatus>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DiscordEventAttendee = z.infer<typeof zDiscordEventAttendee>;
//# sourceMappingURL=DiscordEventAttendee.d.ts.map