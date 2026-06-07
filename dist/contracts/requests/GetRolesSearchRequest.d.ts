import z from 'zod';
export declare const zGetRolesSearchRequest: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>, z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>, z.ZodOptional<z.ZodNumber>>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof import("./SearchRequest").SortDirection>>>;
    permissionIds: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number[] | undefined, string | undefined>>;
}, z.core.$strip>;
export type GetRolesSearchRequest = z.infer<typeof zGetRolesSearchRequest>;
//# sourceMappingURL=GetRolesSearchRequest.d.ts.map