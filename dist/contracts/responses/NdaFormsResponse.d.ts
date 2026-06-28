import z from 'zod';
export declare const zNdaFormsResponse: z.ZodObject<{
    forms: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        userId: z.ZodNumber;
        preferredFirstName: z.ZodString;
        preferredLastName: z.ZodString;
        legalFirstName: z.ZodString;
        legalLastName: z.ZodString;
        addressLine1: z.ZodString;
        addressLine2: z.ZodNullable<z.ZodString>;
        city: z.ZodString;
        state: z.ZodString;
        zipcode: z.ZodString;
        dateOfBirth: z.ZodCoercedDate<unknown>;
        signedStatus: z.ZodBoolean;
        dateSigned: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NdaFormsResponse = z.infer<typeof zNdaFormsResponse>;
//# sourceMappingURL=NdaFormsResponse.d.ts.map