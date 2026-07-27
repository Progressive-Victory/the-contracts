import z from "zod";
export const zMembershipEvalBackfillRequest = z.object({
    startDate: z.coerce.date().nullable(),
    endDate: z.coerce.date().nullable()
});
//# sourceMappingURL=MembershipEvalBackfillRequest.js.map