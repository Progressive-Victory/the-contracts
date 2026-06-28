import z from 'zod';
export const zMapMemberCountsResponse = z.object({
    states: z.record(z.string(), z.int()),
    total: z.int(),
});
//# sourceMappingURL=MapMemberCountsResponse.js.map