import z from 'zod';
export declare enum SortDirection {
    ASC = "asc",
    DESC = "desc"
}
export declare const zSearchRequest: z.ZodObject<{
    page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<typeof SortDirection>>;
}, z.core.$strip>;
export type SearchRequest = z.infer<typeof zSearchRequest>;
//# sourceMappingURL=SearchRequest.d.ts.map