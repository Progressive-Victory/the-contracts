import z from 'zod';
export declare const zMembershipSearchRequest: z.ZodObject<{
    page: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    limit: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
    searchField: z.ZodOptional<z.ZodString>;
    sortField: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<typeof import("./SearchRequest.js").SortDirection>>;
    isBenefitEligible: z.ZodBoolean;
    isMember: z.ZodBoolean;
}, z.core.$strip>;
export type MembershipSearchRequest = z.infer<typeof zMembershipSearchRequest>;
//# sourceMappingURL=MembershipSearchRequest.d.ts.map