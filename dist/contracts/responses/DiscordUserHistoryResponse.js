import { zDiscordUser, zUpdateHistory } from '../data/index.js';
import z from 'zod';
export const zDiscordUserHistoryResponse = z.object({
    data: z.array(zUpdateHistory(zDiscordUser)),
});
//# sourceMappingURL=DiscordUserHistoryResponse.js.map