import z from 'zod';
export declare const zDonation: z.ZodObject<{
    date: z.ZodCoercedDate<unknown>;
    orderNumber: z.ZodString;
    fecId: z.ZodString;
    lineItemId: z.ZodString;
    amount: z.ZodNumber;
    status: z.ZodEnum<{
        approved: "approved";
        declined: "declined";
        pending: "pending";
    }>;
    recurringDuration: z.ZodString;
    recurringPeriod: z.ZodString;
}, z.core.$strip>;
export type Donation = z.infer<typeof zDonation>;
//# sourceMappingURL=Donation.d.ts.map