import z from 'zod';
export declare const zMetaData: z.ZodObject<{
    userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
    dataSource: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MetaData = z.infer<typeof zMetaData>;
//# sourceMappingURL=MetaData.d.ts.map