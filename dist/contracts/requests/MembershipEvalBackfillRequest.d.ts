import z from "zod";
export declare const zMembershipEvalBackfillRequest: z.ZodObject<{
    startDate: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    endDate: z.ZodNullable<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export type MembershipEvalBackfillRequest = z.infer<typeof zMembershipEvalBackfillRequest>;
//# sourceMappingURL=MembershipEvalBackfillRequest.d.ts.map