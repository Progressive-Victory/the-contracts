import z from 'zod';
export declare enum InitiativeType {
    State = "State",
    National = "National"
}
export declare enum EndorsementType {
    PVPledge = "PV Pledge",
    Endorsement = "Endorsement",
    Recommendation = "Recommendation"
}
export declare enum AvatarBgColor {
    Blue = "Blue",
    Yellow = "Yellow"
}
export declare enum ElectionStatus {
    UpcomingPrimary = "Upcoming Primary",
    WonPrimary = "Won Primary",
    Elected = "Elected",
    LostPrimary = "Lost Primary",
    LostGeneral = "Lost General",
    DroppedOut = "Dropped Out"
}
export declare const zEndorsement: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
    state: z.ZodString;
    candidateLink: z.ZodString;
    linkLabel: z.ZodString;
    description: z.ZodString;
    isStateInitiative: z.ZodCoercedBoolean<unknown>;
    isNationalInitiative: z.ZodCoercedBoolean<unknown>;
    isPvMember: z.ZodCoercedBoolean<unknown>;
    tookPvPledge: z.ZodCoercedBoolean<unknown>;
    imgUrl: z.ZodString;
    primaryElection: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    generalElection: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    initiativeLevel: z.ZodEnum<typeof InitiativeType>;
    endorsementLevel: z.ZodEnum<typeof EndorsementType>;
    avatarBgColor: z.ZodEnum<typeof AvatarBgColor>;
    electionStatus: z.ZodNullable<z.ZodEnum<typeof ElectionStatus>>;
}, z.core.$strip>;
export type Endorsement = z.infer<typeof zEndorsement>;
//# sourceMappingURL=Endorsement.d.ts.map