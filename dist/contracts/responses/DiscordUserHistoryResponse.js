import z from 'zod';
import { zDiscordUser, zUpdateHistory } from '../data';
export const zDiscordUserHistoryResponse = z.object({
    data: z.array(zUpdateHistory(zDiscordUser)),
});
//# sourceMappingURL=DiscordUserHistoryResponse.js.map