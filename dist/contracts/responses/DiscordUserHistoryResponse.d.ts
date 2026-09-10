import z from 'zod';
export declare const zDiscordUserHistoryResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        historyId: z.ZodInt;
        historyType: z.ZodEnum<typeof import("../data/UpdateHistory.js").UpdateHistoryType>;
        historyDataSource: z.ZodNullable<z.ZodString>;
        historyWhoUpdatedId: z.ZodNullable<z.ZodInt>;
        historyWhenUpdatedUtc: z.ZodCoercedDate<unknown>;
        id: z.ZodString;
        username: z.ZodString;
        image: z.ZodString;
        userId: z.ZodNullable<z.ZodNumber>;
        email: z.ZodNullable<z.ZodString>;
        status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordUser.js").DiscordUserStatus>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DiscordUserHistoryResponse = z.infer<typeof zDiscordUserHistoryResponse>;
//# sourceMappingURL=DiscordUserHistoryResponse.d.ts.map