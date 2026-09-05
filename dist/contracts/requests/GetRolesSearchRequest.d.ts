import z from 'zod';
export declare const zGetRolesSearchRequest: z.ZodObject<{
    page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<typeof import("./SearchRequest.js").SortDirection>>;
    permissionIds: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number[], string>>>;
}, z.core.$strip>;
export type GetRolesSearchRequest = z.infer<typeof zGetRolesSearchRequest>;
//# sourceMappingURL=GetRolesSearchRequest.d.ts.map