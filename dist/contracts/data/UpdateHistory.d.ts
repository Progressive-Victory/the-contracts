import z from 'zod';
import { $ZodShape } from 'zod/v4/core';
export declare enum UpdateHistoryType {
    Inserted = "I",
    Updated = "U",
    Merged = "M",
    Deleted = "D"
}
export declare const zUpdateHistoryType: z.ZodEnum<typeof UpdateHistoryType>;
declare const zUpdateHistoryBase: z.ZodObject<{
    historyId: z.ZodInt;
    historyType: z.ZodEnum<typeof UpdateHistoryType>;
    historyDataSource: z.ZodNullable<z.ZodString>;
    historyWhoUpdatedId: z.ZodNullable<z.ZodInt>;
    historyWhenUpdatedUtc: z.ZodCoercedDate<unknown>;
}, z.core.$strip>;
export declare const zUpdateHistory: <Shape extends $ZodShape>(zData: z.ZodObject<Shape>) => z.ZodObject<(("historyType" | "historyId" | "historyDataSource" | "historyWhoUpdatedId" | "historyWhenUpdatedUtc") & keyof Shape extends never ? {
    historyId: z.ZodInt;
    historyType: z.ZodEnum<typeof UpdateHistoryType>;
    historyDataSource: z.ZodNullable<z.ZodString>;
    historyWhoUpdatedId: z.ZodNullable<z.ZodInt>;
    historyWhenUpdatedUtc: z.ZodCoercedDate<unknown>;
} & { -readonly [P in keyof Shape]: Shape[P]; } : ({
    historyId: z.ZodInt;
    historyType: z.ZodEnum<typeof UpdateHistoryType>;
    historyDataSource: z.ZodNullable<z.ZodString>;
    historyWhoUpdatedId: z.ZodNullable<z.ZodInt>;
    historyWhenUpdatedUtc: z.ZodCoercedDate<unknown>;
} extends infer T_1 extends z.core.util.SomeObject ? { [K in keyof T_1 as K extends keyof Shape ? never : K]: T_1[K]; } : never) & { [K_1 in keyof { -readonly [P in keyof Shape]: Shape[P]; }]: { -readonly [P in keyof Shape]: Shape[P]; }[K_1]; }) extends infer T ? { [k in keyof T]: T[k]; } : never, z.core.$strip>;
export type UpdateHistory<T> = z.infer<typeof zUpdateHistoryBase> & T;
export {};
//# sourceMappingURL=UpdateHistory.d.ts.map