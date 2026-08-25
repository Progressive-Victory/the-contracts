import z from 'zod';
export var MembershipDeliverableStatus;
(function (MembershipDeliverableStatus) {
    MembershipDeliverableStatus[MembershipDeliverableStatus["NotEligible"] = 0] = "NotEligible";
    MembershipDeliverableStatus[MembershipDeliverableStatus["NotStarted"] = 1] = "NotStarted";
    MembershipDeliverableStatus[MembershipDeliverableStatus["Printed"] = 2] = "Printed";
    MembershipDeliverableStatus[MembershipDeliverableStatus["InTransit"] = 3] = "InTransit";
    MembershipDeliverableStatus[MembershipDeliverableStatus["Recieved"] = 4] = "Recieved";
    MembershipDeliverableStatus[MembershipDeliverableStatus["Returned"] = 5] = "Returned";
})(MembershipDeliverableStatus || (MembershipDeliverableStatus = {}));
export var MembershipFulfillmentStatus;
(function (MembershipFulfillmentStatus) {
    MembershipFulfillmentStatus[MembershipFulfillmentStatus["NotEligible"] = 0] = "NotEligible";
    MembershipFulfillmentStatus[MembershipFulfillmentStatus["NotFulfilled"] = 1] = "NotFulfilled";
    MembershipFulfillmentStatus[MembershipFulfillmentStatus["Fulfilled"] = 2] = "Fulfilled";
})(MembershipFulfillmentStatus || (MembershipFulfillmentStatus = {}));
export var ShirtSize;
(function (ShirtSize) {
    ShirtSize["ExtraSmall"] = "XS";
    ShirtSize["Small"] = "S";
    ShirtSize["Medium"] = "M";
    ShirtSize["Large"] = "L";
    ShirtSize["ExtraLarge"] = "XL";
    ShirtSize["DoubleExtraLarge"] = "2XL";
})(ShirtSize || (ShirtSize = {}));
export const zShirtSize = z.enum(ShirtSize);
export const zMembershipFulfillmentStatus = z.enum(MembershipFulfillmentStatus);
export const zMembershipDeliverableStatus = z.enum(MembershipDeliverableStatus);
export const zMembership = z.object({
    membershipCardStatus: zMembershipDeliverableStatus,
    membershipMerchStatus: zMembershipDeliverableStatus,
    shirtSize: zShirtSize.nullable(),
    duesPayingMember: z.boolean(),
    membershipFulfillmentStatus: zMembershipFulfillmentStatus.nullable(),
    nameConfirmed: z.boolean(),
    addressConfirmed: z.boolean(),
    membershipBenefitEligible: z.boolean(),
});
//# sourceMappingURL=Membership.js.map