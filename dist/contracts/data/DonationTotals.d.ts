import z from 'zod';
export declare enum TotalType {
    RECURRING = "recurring",
    ONE_TIME = "one_time",
    ALL = "all"
}
export declare const zTotalType: z.ZodEnum<typeof TotalType>;
export declare const zDonationTotal: z.ZodObject<{
    totalType: z.ZodEnum<typeof TotalType>;
    total: z.ZodNumber;
}, z.core.$strip>;
export type DonationTotal = z.infer<typeof zDonationTotal>;
//# sourceMappingURL=DonationTotals.d.ts.map