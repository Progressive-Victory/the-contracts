import { zSearchRequest } from './SearchRequest';
import { zBoolQuery, zIntArrayQuery } from '../../util';
export const zGetUsersSearchRequest = zSearchRequest.extend({
    roleIds: zIntArrayQuery,
    withDiscordUsers: zBoolQuery,
});
//# sourceMappingURL=GetUsersSearchRequest.js.map