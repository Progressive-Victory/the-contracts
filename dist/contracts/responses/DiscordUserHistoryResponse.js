import z from 'zod';
import { zDiscordUser, zUpdateHistory } from '../data/index.js';
export const zDiscordUserHistoryResponse = z.object({
    data: z.array(zUpdateHistory(zDiscordUser)),
});
//# sourceMappingURL=DiscordUserHistoryResponse.js.map