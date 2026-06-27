import z from 'zod';
export declare const zGetUsersSearchRequest: z.ZodObject<{
    page: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>, z.ZodOptional<z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<number | undefined, string | undefined>>, z.ZodOptional<z.ZodNumber>>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof import("./SearchRequest.js").SortDirection>>>;
    roleIds: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<never, string | undefined>>;
    withDiscordUsers: z.ZodPipe<z.ZodPipe<z.ZodOptional<z.ZodEnum<{
        true: "true";
        false: "false";
    }>>, z.ZodTransform<boolean, "true" | "false" | undefined>>, z.ZodBoolean>;
}, z.core.$strip>;
export type GetUsersSearchRequest = z.infer<typeof zGetUsersSearchRequest>;
//# sourceMappingURL=GetUsersSearchRequest.d.ts.map