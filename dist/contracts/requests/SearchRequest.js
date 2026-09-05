import { zEnumQuery, zIntQuery, zStringQuery } from '../../util/index.js';
import z from 'zod';
export var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
})(SortDirection || (SortDirection = {}));
export const zSearchRequest = z.object({
    page: zIntQuery,
    limit: zIntQuery,
    searchField: zStringQuery,
    sortField: zStringQuery,
    query: zStringQuery,
    sort: zEnumQuery(SortDirection),
});
//# sourceMappingURL=SearchRequest.js.map