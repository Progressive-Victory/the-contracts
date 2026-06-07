import { zMetaData } from '../data/MetaData';
import z from 'zod';
export const zUpdateDiscordUserImageRequest = zMetaData
    .extend({
    discordImage: z.string(),
})
    .strict();
//# sourceMappingURL=UpdateDiscordUserImageRequest.js.map