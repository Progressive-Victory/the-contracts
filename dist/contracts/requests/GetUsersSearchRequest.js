import { zBoolQuery, zIntArrayQuery } from '../../util/index.js';
import { zSearchRequest } from './SearchRequest.js';
export const zGetUsersSearchRequest = zSearchRequest.extend({
    isDonor: zBoolQuery,
    roleIds: zIntArrayQuery,
});
//# sourceMappingURL=GetUsersSearchRequest.js.map