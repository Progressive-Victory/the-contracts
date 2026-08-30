import z from 'zod';
export declare enum MembershipDeliverableStatus {
    NotEligible = 0,
    NotStarted = 1,
    Printed = 2,
    InTransit = 3,
    Recieved = 4,
    Returned = 5
}
export declare enum MembershipFulfillmentStatus {
    NotEligible = 0,
    NotFulfilled = 1,
    Fulfilled = 2
}
export declare enum ShirtSize {
    ExtraSmall = "XS",
    Small = "S",
    Medium = "M",
    Large = "L",
    ExtraLarge = "XL",
    DoubleExtraLarge = "2XL"
}
export declare const zShirtSize: z.ZodEnum<typeof ShirtSize>;
export declare const zMembershipFulfillmentStatus: z.ZodEnum<typeof MembershipFulfillmentStatus>;
export declare const zMembershipDeliverableStatus: z.ZodEnum<typeof MembershipDeliverableStatus>;
export declare const zMembership: z.ZodObject<{
    donorEmail: z.ZodString;
    membershipCardStatus: z.ZodEnum<typeof MembershipDeliverableStatus>;
    membershipMerchStatus: z.ZodEnum<typeof MembershipDeliverableStatus>;
    shirtSize: z.ZodNullable<z.ZodEnum<typeof ShirtSize>>;
    duesPayingMember: z.ZodBoolean;
    membershipFulfillmentStatus: z.ZodNullable<z.ZodEnum<typeof MembershipFulfillmentStatus>>;
    nameConfirmed: z.ZodBoolean;
    addressConfirmed: z.ZodBoolean;
    membershipBenefitEligible: z.ZodBoolean;
}, z.core.$strip>;
export type Membership = z.infer<typeof zMembership>;
//# sourceMappingURL=Membership.d.ts.map