import z from 'zod';
export const zUpdatePositionRequest = z.object({
    name: z.string().max(100).optional(),
    childIds: z.array(z.int()).optional(),
    userIds: z.array(z.int()).optional(),
});
//# sourceMappingURL=UpdatePositionRequest.js.map