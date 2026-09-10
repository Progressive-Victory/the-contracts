import z from 'zod';
/**
 * Discord User records should initially be created with a status of NotJoined.
 * Records that exist prior to the creation of the status field will have a NULL
 * status initially. A NULL status should be treated as unknown and the discord
 * API should be queried and the result saved on this record.
 */
export var DiscordUserStatus;
(function (DiscordUserStatus) {
    DiscordUserStatus[DiscordUserStatus["NotJoined"] = 0] = "NotJoined";
    DiscordUserStatus[DiscordUserStatus["Joined"] = 1] = "Joined";
    DiscordUserStatus[DiscordUserStatus["Left"] = 2] = "Left";
    DiscordUserStatus[DiscordUserStatus["Banned"] = 3] = "Banned";
})(DiscordUserStatus || (DiscordUserStatus = {}));
export const zDiscordUser = z.object({
    id: z.string(),
    username: z.string(),
    image: z.string(),
    userId: z.number().nullable(),
    email: z.string().nullable(),
    status: z.enum(DiscordUserStatus).nullable(),
});
//# sourceMappingURL=DiscordUser.js.map