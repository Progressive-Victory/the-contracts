import { zSearchRequest } from './SearchRequest.js';
import { zBoolQuery, zIntArrayQuery } from '../../util/index.js';
export const zGetUsersSearchRequest = zSearchRequest.extend({
    roleIds: zIntArrayQuery,
    withDiscordUsers: zBoolQuery,
});
//# sourceMappingURL=GetUsersSearchRequest.js.map