import z from 'zod';
/**
 * Discord User records should initially be created with a status of NotJoined.
 * Records that exist prior to the creation of the status field will have a NULL
 * status initially. A NULL status should be treated as unknown and the discord
 * API should be queried and the result saved on this record.
 */
export declare enum DiscordServerStatus {
    NotJoined = 0,
    Joined = 1,
    Left = 2,
    Banned = 3
}
export declare const zDiscordUser: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodString;
    image: z.ZodString;
    userId: z.ZodNullable<z.ZodNumber>;
    email: z.ZodNullable<z.ZodString>;
    status: z.ZodNullable<z.ZodEnum<typeof DiscordServerStatus>>;
}, z.core.$strip>;
export type DiscordUser = z.infer<typeof zDiscordUser>;
//# sourceMappingURL=DiscordUser.d.ts.map