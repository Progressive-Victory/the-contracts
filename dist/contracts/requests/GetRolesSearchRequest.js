import { zIntArrayQuery } from '../../util/index.js';
import { zSearchRequest } from './SearchRequest.js';
export const zGetRolesSearchRequest = zSearchRequest.extend({
    permissionIds: zIntArrayQuery,
});
//# sourceMappingURL=GetRolesSearchRequest.js.map