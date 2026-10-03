import { zMutationRequest } from './MutationRequest.js';
import { DiscordUserStatus } from '../data/DiscordUser.js';
import z from 'zod';
export const zCreateDiscordUserRequest = zMutationRequest.extend({
    discordId: z.string().nonempty(),
    discordUsername: z.string().nonempty(),
    discordImage: z.string().nonempty(),
    userId: z.coerce.number(),
    email: z.string().nonempty(),
    status: z.enum(DiscordUserStatus).nullish(),
});
//# sourceMappingURL=CreateDiscordUserRequest.js.map