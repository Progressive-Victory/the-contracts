import { zSearchRequest } from './SearchRequest.js';
import { zBoolQuery, zIntArrayQuery } from '../../util/index.js';
export const zGetUsersSearchRequest = zSearchRequest.extend({
    isDonor: zBoolQuery,
    roleIds: zIntArrayQuery,
});
//# sourceMappingURL=GetUsersSearchRequest.js.map