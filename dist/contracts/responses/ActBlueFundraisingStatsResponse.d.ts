import z from 'zod';
export declare const zActBlueFundraisingStatsResponse: z.ZodObject<{
    totalDollarsRaised: z.ZodNumber;
    oneTimeDollarsRaised: z.ZodNumber;
    recurringDollarsRaised: z.ZodNumber;
    totalContributionCount: z.ZodNumber;
    oneTimeContributionCount: z.ZodNumber;
    recurringContributionCount: z.ZodNumber;
    totalDonorCount: z.ZodNumber;
    oneTimeDonorCount: z.ZodNumber;
    recurringDonorCount: z.ZodNumber;
    avgContributionAmount: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type ActBlueFundraisingStatsResponse = z.infer<typeof zActBlueFundraisingStatsResponse>;
//# sourceMappingURL=ActBlueFundraisingStatsResponse.d.ts.map