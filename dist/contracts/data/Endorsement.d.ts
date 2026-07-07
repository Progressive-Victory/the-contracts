import z from 'zod';
export declare enum InitiativeType {
    State = 0,
    National = 1
}
export declare enum EndorsementType {
    PVPledge = 0,
    Endorsement = 1,
    Recommendation = 2
}
export declare enum BackgroundColor {
    Blue = 0,
    Yellow = 1
}
export declare enum ElectionStatus {
    NoElection = 0,
    UpcomingPrimary = 1,
    WonPrimary = 2,
    Elected = 3,
    LostPrimary = 4,
    LostGeneral = 5,
    DroppedOut = 6
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
    avatarBgColor: z.ZodEnum<typeof BackgroundColor>;
    electionStatus: z.ZodEnum<typeof ElectionStatus>;
}, z.core.$strip>;
export type Endorsement = z.infer<typeof zEndorsement>;
//# sourceMappingURL=Endorsement.d.ts.map