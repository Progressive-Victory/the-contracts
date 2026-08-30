import z from 'zod';
export declare const zUpdateMembershipRequest: z.ZodObject<{
    metaData: z.ZodOptional<z.ZodObject<{
        userWhoUpdatedId: z.ZodOptional<z.ZodNumber>;
        dataSource: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    membershipCardStatus: z.ZodOptional<z.ZodEnum<typeof import("../data/Membership.js").MembershipDeliverableStatus>>;
    membershipMerchStatus: z.ZodOptional<z.ZodEnum<typeof import("../data/Membership.js").MembershipDeliverableStatus>>;
    shirtSize: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../data/Membership.js").ShirtSize>>>;
    duesPayingMember: z.ZodOptional<z.ZodBoolean>;
    membershipFulfillmentStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<typeof import("../data/Membership.js").MembershipFulfillmentStatus>>>;
    nameConfirmed: z.ZodOptional<z.ZodBoolean>;
    addressConfirmed: z.ZodOptional<z.ZodBoolean>;
    membershipBenefitEligible: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UpdateMembershipRequest = z.infer<typeof zUpdateMembershipRequest>;
//# sourceMappingURL=UpdateMembershipRequest.d.ts.map