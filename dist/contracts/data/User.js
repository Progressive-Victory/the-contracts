import { zActBlueDonor } from './ActBlueDonor';
import { zDiscordUser } from './DiscordUser';
import { zLocation } from './Location';
import { zOnboardingStage } from './OnboardingStage';
import { zRole } from './Role';
import { zUpdateHistory } from './UpdateHistory';
import { zUserAddress } from './UserAddress';
import z from 'zod';
export var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Deleted"] = 0] = "Deleted";
    UserStatus[UserStatus["Active"] = 1] = "Active";
})(UserStatus || (UserStatus = {}));
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
export const zUserStatus = z.enum(UserStatus);
const zBaseUser = z.object({
    id: z.int(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    preferredName: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    birthdate: z.coerce.date().nullable(),
    location: zLocation.nullable(),
    address: zUserAddress,
    acceptedAlerts: z.boolean(),
    verified: z.boolean(),
    onboardingStage: zOnboardingStage,
    lastSmsCode: z.number().nullable(),
    lastSmsCodeSendTimeUtc: z.coerce.date().nullable(),
    status: zUserStatus,
    createdAtUtc: z.coerce.date().nullable(),
    joinedAtUtc: z.coerce.date().nullable(),
    completedIntakeUtc: z.coerce.date().nullable(),
    membershipCardStatus: zMembershipDeliverableStatus.default(0),
    membershipMerchStatus: zMembershipDeliverableStatus.default(0),
    shirtSize: zShirtSize.nullable(),
    duesPayingMember: z.boolean(),
    membershipFulfillmentStatus: zMembershipFulfillmentStatus.nullable(),
    nameConfirmed: z.boolean(),
    addressConfirmed: z.boolean(),
    aliases: z.array(z.string()).optional(),
    roles: z.array(zRole).optional(),
    discordUsers: z.array(zDiscordUser).optional(),
    donors: z.array(zActBlueDonor).optional(),
});
export const zUser = zBaseUser.extend({
    history: z.array(zUpdateHistory(zBaseUser)).optional(),
    donorHistory: z.array(zUpdateHistory(zActBlueDonor)).optional(),
});
//# sourceMappingURL=User.js.map