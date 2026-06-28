import z from 'zod';
export type InitiativeType_t = '' | 'State' | 'National';
export type EndorsementType_t = 'PV Pledge' | 'Endorsement' | 'Recommendation';
export type AvatarBackgroundColor_t = 'blue' | 'yellow';
export type ElectionStatus_t = '' | 'Upcoming Primary' | 'Won Primary' | 'Elected' | 'Lost Primary' | 'Lost General' | 'Dropped Out';
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
    primaryElection: z.ZodCoercedDate<unknown>;
    generalElection: z.ZodCoercedDate<unknown>;
    initiativeType: z.ZodString;
    endorsementType: z.ZodString;
    avatarBackgroundColor: z.ZodString;
    electionStatus: z.ZodString;
}, z.core.$strip>;
export type Endorsement = z.infer<typeof zEndorsement>;
//# sourceMappingURL=Endorsement.d.ts.map