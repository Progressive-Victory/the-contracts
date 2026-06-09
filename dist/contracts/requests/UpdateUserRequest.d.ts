import z from 'zod';
export declare const zUpdateUserRequest: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    preferredName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    birthdate: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    zipCode: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    address: z.ZodOptional<z.ZodObject<{
        addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        county: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        state: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        zip: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
    acceptedAlerts: z.ZodOptional<z.ZodBoolean>;
    verified: z.ZodOptional<z.ZodBoolean>;
    onboardingStage: z.ZodOptional<z.ZodEnum<typeof import("../data/OnboardingStage.js").OnboardingStage>>;
    lastSmsCode: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lastSmsCodeSendTimeUtc: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    status: z.ZodOptional<z.ZodEnum<typeof import("../data/User.js").UserStatus>>;
    joinedAtUtc: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    completedIntakeUtc: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    membershipCardStatus: z.ZodOptional<z.ZodEnum<typeof import("../data/User.js").MembershipDeliverableStatus>>;
    membershipMerchStatus: z.ZodOptional<z.ZodEnum<typeof import("../data/User.js").MembershipDeliverableStatus>>;
    shirtSize: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../data/User.js").ShirtSize>>>;
    duesPayingMember: z.ZodOptional<z.ZodBoolean>;
    membershipFulfillmentStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../data/User.js").MembershipFulfillmentStatus>>>;
    nameConfirmed: z.ZodOptional<z.ZodBoolean>;
    addressConfirmed: z.ZodOptional<z.ZodBoolean>;
    aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
    roles: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strict>;
export type UpdateUserRequest = z.infer<typeof zUpdateUserRequest>;
//# sourceMappingURL=UpdateUserRequest.d.ts.map