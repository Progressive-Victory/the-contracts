import { zSearchRequest } from './SearchRequest';
import { zIntArrayQuery } from '../../util';
export const zGetRolesSearchRequest = zSearchRequest.extend({
    permissionIds: zIntArrayQuery,
});
//# sourceMappingURL=GetRolesSearchRequest.js.map