import z from 'zod';
export function zPaginatedResponse(zData) {
    return z.object({
        page: z.number(),
        limit: z.number(),
        count: z.number(),
        data: z.array(zData),
    });
}
//# sourceMappingURL=PaginatedResponse.js.map