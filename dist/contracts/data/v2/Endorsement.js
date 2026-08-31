import z from 'zod';
export var InitiativeType;
(function (InitiativeType) {
    InitiativeType[InitiativeType["State"] = 0] = "State";
    InitiativeType[InitiativeType["National"] = 1] = "National";
})(InitiativeType || (InitiativeType = {}));
export var EndorsementType;
(function (EndorsementType) {
    EndorsementType[EndorsementType["PVPledge"] = 0] = "PVPledge";
    EndorsementType[EndorsementType["Endorsement"] = 1] = "Endorsement";
    EndorsementType[EndorsementType["Recommendation"] = 2] = "Recommendation";
    EndorsementType[EndorsementType["Unendorsed"] = 3] = "Unendorsed";
})(EndorsementType || (EndorsementType = {}));
export var BackgroundColor;
(function (BackgroundColor) {
    BackgroundColor[BackgroundColor["Blue"] = 0] = "Blue";
    BackgroundColor[BackgroundColor["Yellow"] = 1] = "Yellow";
    BackgroundColor[BackgroundColor["Red"] = 2] = "Red";
})(BackgroundColor || (BackgroundColor = {}));
export var ElectionStatus;
(function (ElectionStatus) {
    ElectionStatus[ElectionStatus["NoElection"] = 0] = "NoElection";
    ElectionStatus[ElectionStatus["UpcomingPrimary"] = 1] = "UpcomingPrimary";
    ElectionStatus[ElectionStatus["WonPrimary"] = 2] = "WonPrimary";
    ElectionStatus[ElectionStatus["Elected"] = 3] = "Elected";
    ElectionStatus[ElectionStatus["LostPrimary"] = 4] = "LostPrimary";
    ElectionStatus[ElectionStatus["LostGeneral"] = 5] = "LostGeneral";
    ElectionStatus[ElectionStatus["DroppedOut"] = 6] = "DroppedOut";
})(ElectionStatus || (ElectionStatus = {}));
export const zEndorsement = z.object({
    id: z.int(),
    name: z.string(),
    state: z.string(),
    jurisiction: z.string().nullable(),
    endorsementDate: z.coerce.date().nullable(),
    endorsementReason: z.string().nullable(),
    handleHref: z.string().nullable(),
    handle: z.string(),
    bodyText: z.string(),
    websiteHref: z.string(),
    donateHref: z.string().nullable(),
    isStateInitiative: z.boolean(),
    isNationalInitiative: z.boolean(),
    isPvMember: z.boolean(),
    imgUrl: z.string(),
    primaryElection: z.coerce.date().nullable(),
    generalElection: z.coerce.date().nullable(),
    initiativeLevel: z.enum(InitiativeType),
    endorsementLevel: z.enum(EndorsementType),
    avatarBgColor: z.enum(BackgroundColor),
    electionStatus: z.enum(ElectionStatus),
});
//# sourceMappingURL=Endorsement.js.map