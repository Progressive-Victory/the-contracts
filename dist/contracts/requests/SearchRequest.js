import { zEnumQuery, zIntQuery, zStringQuery } from '../../util/index.js';
import z from 'zod';
export var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "asc";
    SortDirection["DESC"] = "desc";
})(SortDirection || (SortDirection = {}));
export const zSearchRequest = z.object({
    page: zIntQuery,
    limit: zIntQuery.default(25),
    searchField: zStringQuery,
    sortField: zStringQuery,
    query: zStringQuery,
    sort: zEnumQuery(SortDirection).default(SortDirection.DESC),
});
//# sourceMappingURL=SearchRequest.js.map