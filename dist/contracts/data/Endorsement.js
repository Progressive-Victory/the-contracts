import z from 'zod';
// Implicit enums will convert into numbers when creating database entries, which we do not want
export var InitiativeType;
(function (InitiativeType) {
    InitiativeType["State"] = "State";
    InitiativeType["National"] = "National";
})(InitiativeType || (InitiativeType = {}));
export var EndorsementType;
(function (EndorsementType) {
    EndorsementType["PVPledge"] = "PV Pledge";
    EndorsementType["Endorsement"] = "Endorsement";
    EndorsementType["Recommendation"] = "Recommendation";
})(EndorsementType || (EndorsementType = {}));
export var AvatarBgColor;
(function (AvatarBgColor) {
    AvatarBgColor["Blue"] = "Blue";
    AvatarBgColor["Yellow"] = "Yellow";
})(AvatarBgColor || (AvatarBgColor = {}));
export var ElectionStatus;
(function (ElectionStatus) {
    ElectionStatus["NoElection"] = "No Election";
    ElectionStatus["UpcomingPrimary"] = "Upcoming Primary";
    ElectionStatus["WonPrimary"] = "Won Primary";
    ElectionStatus["Elected"] = "Elected";
    ElectionStatus["LostPrimary"] = "Lost Primary";
    ElectionStatus["LostGeneral"] = "Lost General";
    ElectionStatus["DroppedOut"] = "Dropped Out";
})(ElectionStatus || (ElectionStatus = {}));
export const zEndorsement = z.object({
    id: z.int(),
    name: z.string(),
    state: z.string(),
    candidateLink: z.string(),
    linkLabel: z.string(),
    description: z.string(),
    isStateInitiative: z.coerce.boolean(),
    isNationalInitiative: z.coerce.boolean(),
    isPvMember: z.coerce.boolean(),
    tookPvPledge: z.coerce.boolean(),
    imgUrl: z.string(),
    primaryElection: z.coerce.date().nullable(),
    generalElection: z.coerce.date().nullable(),
    initiativeLevel: z.enum(InitiativeType).nullable(),
    endorsementLevel: z.enum(EndorsementType),
    avatarBgColor: z.enum(AvatarBgColor),
    electionStatus: z.enum(ElectionStatus).nullable(),
});
//# sourceMappingURL=Endorsement.js.map