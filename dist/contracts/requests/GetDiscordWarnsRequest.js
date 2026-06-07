import { zSearchRequest } from './SearchRequest';
import z from 'zod';
export const zGetDiscordWarnsRequest = z
    .object({
    mod_discord_id: z.string().optional(),
    tgt_discord_id: z.string().optional(),
    time_window: z.string().optional(),
})
    .extend(zSearchRequest.shape);
//# sourceMappingURL=GetDiscordWarnsRequest.js.map