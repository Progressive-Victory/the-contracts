import { zSearchRequest } from './SearchRequest.js';
import { zIntArrayQuery } from '../../util/index.js';
export const zGetRolesSearchRequest = zSearchRequest.extend({
    permissionIds: zIntArrayQuery,
});
//# sourceMappingURL=GetRolesSearchRequest.js.map