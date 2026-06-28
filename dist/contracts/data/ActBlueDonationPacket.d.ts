import z from 'zod';
export declare const zActBlueDonationPacket: z.ZodObject<{
    sequence: z.ZodNumber;
    amount: z.ZodNumber;
    recurringAmount: z.ZodNullable<z.ZodNumber>;
    paidAt: z.ZodCoercedDate<unknown>;
    lineitemId: z.ZodNumber;
    amountLessAbFees: z.ZodNumber;
    contributionForm: z.ZodString;
    orderNumber: z.ZodString;
    isRecurring: z.ZodBoolean;
    isPaypal: z.ZodBoolean;
    isMobile: z.ZodBoolean;
    isExpress: z.ZodBoolean;
    recurringPeriod: z.ZodString;
    recurringDuration: z.ZodNullable<z.ZodNumber>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    state: z.ZodNullable<z.ZodString>;
    email: z.ZodString;
    kind: z.ZodString;
    customFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        label: z.ZodString;
        answer: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ActBlueDonationPacket = z.infer<typeof zActBlueDonationPacket>;
//# sourceMappingURL=ActBlueDonationPacket.d.ts.map