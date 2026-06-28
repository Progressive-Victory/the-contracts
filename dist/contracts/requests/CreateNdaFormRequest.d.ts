import z from 'zod';
export declare const zCreateNdaFormRequest: z.ZodObject<{
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
}, z.core.$strip>;
export type CreateNdaFormRequest = z.infer<typeof zCreateNdaFormRequest>;
//# sourceMappingURL=CreateNdaFormRequest.d.ts.map