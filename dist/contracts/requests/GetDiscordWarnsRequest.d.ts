import z from 'zod';
export declare const zGetDiscordWarnsRequest: z.ZodObject<{
    mod_discord_id: z.ZodOptional<z.ZodString>;
    tgt_discord_id: z.ZodOptional<z.ZodString>;
    time_window: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<typeof import("./SearchRequest.js").SortDirection>>>;
}, z.core.$strip>;
export type GetDiscordWarnsRequest = z.infer<typeof zGetDiscordWarnsRequest>;
//# sourceMappingURL=GetDiscordWarnsRequest.d.ts.map