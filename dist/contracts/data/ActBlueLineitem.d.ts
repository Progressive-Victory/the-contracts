import z from 'zod';
export declare const zActBlueLineitem: z.ZodObject<{
    sequence: z.ZodNumber;
    amount: z.ZodNumber;
    recurringAmount: z.ZodNullable<z.ZodNumber>;
    paidAt: z.ZodCoercedDate<unknown>;
    lineitemId: z.ZodNumber;
    amountLessAbFees: z.ZodNumber;
}, z.core.$strict>;
export type ActBlueLineitem = z.infer<typeof zActBlueLineitem>;
//# sourceMappingURL=ActBlueLineitem.d.ts.map