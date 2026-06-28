import z from 'zod';
export const zDonation = z.object({
    date: z.coerce.date(),
    orderNumber: z.string(),
    fecId: z.string(),
    lineItemId: z.string(),
    amount: z.number(),
    status: z.enum(['approved', 'declined', 'pending']),
    recurringDuration: z.string(),
    recurringPeriod: z.string(),
});
//# sourceMappingURL=Donation.js.map