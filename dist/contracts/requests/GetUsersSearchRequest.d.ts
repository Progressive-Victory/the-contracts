import z from 'zod';
export declare const zGetUsersSearchRequest: z.ZodObject<{
    page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<typeof import("./SearchRequest.js").SortDirection>>;
    isDonor: z.ZodOptional<z.ZodPipe<z.ZodEnum<{
        true: "true";
        false: "false";
    }>, z.ZodTransform<boolean, "true" | "false">>>;
    roleIds: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number[], string>>>;
}, z.core.$strip>;
export type GetUsersSearchRequest = z.infer<typeof zGetUsersSearchRequest>;
//# sourceMappingURL=GetUsersSearchRequest.d.ts.map