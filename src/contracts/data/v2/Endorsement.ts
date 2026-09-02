import z from 'zod';

export enum InitiativeType {
    State = 0,
    National = 1,
}
export enum EndorsementType {
    PVPledge = 0,
    Endorsement = 1,
    Recommendation = 2,
    Unendorsed = 3
}
export enum BackgroundColor {
    Blue = "blue",
    Yellow = "yellow",
    Red = "red"
}
export enum ElectionStatus {
    NoElection = 0,
    UpcomingPrimary = 1,
    WonPrimary = 2,
    Elected = 3,
    LostPrimary = 4,
    LostGeneral = 5,
    DroppedOut = 6,
}

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
    isPvMember: z.boolean(),
    imgUrl: z.string(),
    primaryElection: z.coerce.date().nullable(),
    generalElection: z.coerce.date().nullable(),
    initiativeLevel: z.enum(InitiativeType),
    endorsementLevel: z.enum(EndorsementType),
    avatarBgColor: z.enum(BackgroundColor),
    electionStatus: z.enum(ElectionStatus),
});

export type Endorsement = z.infer<typeof zEndorsement>;
