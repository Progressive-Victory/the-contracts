import { zCreateDiscordUserRequest } from "./index.js";
export const zUpdateDiscordUserRequest = zCreateDiscordUserRequest
    .omit({ discordId: true })
    .partial()
    .strict();
//# sourceMappingURL=UpdateDiscordUserRequest.js.map