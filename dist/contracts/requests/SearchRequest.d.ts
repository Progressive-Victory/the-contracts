import z from 'zod';
export declare enum SortDirection {
    ASC = "asc",
    DESC = "desc"
}
export declare const zSearchRequest: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>, z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>, z.ZodOptional<z.ZodNumber>>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof SortDirection>>>;
}, z.core.$strip>;
export type SearchRequest = z.infer<typeof zSearchRequest>;
//# sourceMappingURL=SearchRequest.d.ts.map