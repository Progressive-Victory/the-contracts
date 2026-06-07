import z from 'zod';
export declare const zUserOnboardingCollectInfoRequest: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    phone: z.ZodString;
    zipCode: z.ZodNumber;
    birthdate: z.ZodCoercedDate<unknown>;
    acceptedAlerts: z.ZodBoolean;
    usCitizen: z.ZodBoolean;
}, z.core.$strip>;
export type UserOnboardingCollectInfoRequest = z.infer<typeof zUserOnboardingCollectInfoRequest>;
//# sourceMappingURL=UserOnboardingCollectInfoRequest.d.ts.map