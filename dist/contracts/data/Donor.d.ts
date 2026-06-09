import z from 'zod';
export declare const zDonor: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodNullable<z.ZodString>;
    discordUsername: z.ZodString;
    shippingName: z.ZodString;
    shippingAddress: z.ZodString;
    shippingStatus: z.ZodEnum<typeof import("./ShippingStatus.js").ShippingStatus>;
    donations: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Donor = z.infer<typeof zDonor>;
//# sourceMappingURL=Donor.d.ts.map