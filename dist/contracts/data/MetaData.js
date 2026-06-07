import z from 'zod';
export const zMetaData = z.object({
    userWhoUpdatedId: z.number().optional(),
    dataSource: z.string().optional(),
});
//# sourceMappingURL=MetaData.js.map