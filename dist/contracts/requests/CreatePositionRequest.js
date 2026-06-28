import z from 'zod';
export const zCreatePositionRequest = z.object({
    name: z.string().max(100),
    parentIds: z.array(z.int()),
});
//# sourceMappingURL=CreatePositionRequest.js.map