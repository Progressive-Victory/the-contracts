import z from 'zod';
import { zDiscordUser, zUpdateHistory } from '~/contracts/data';

export const zDiscordUserHistoryResponse = z.object({
	data: z.array(zUpdateHistory(zDiscordUser)),
});

export type DiscordUserHistoryResponse = z.infer<
	typeof zDiscordUserHistoryResponse
>;
