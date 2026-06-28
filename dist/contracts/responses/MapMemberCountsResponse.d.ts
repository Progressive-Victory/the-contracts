import z from 'zod';
export declare const zMapMemberCountsResponse: z.ZodObject<{
    states: z.ZodRecord<z.ZodString, z.ZodInt>;
    total: z.ZodInt;
}, z.core.$strip>;
export type MapMemberCountsResponse = z.infer<typeof zMapMemberCountsResponse>;
//# sourceMappingURL=MapMemberCountsResponse.d.ts.map