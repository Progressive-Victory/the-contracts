import z from 'zod';
export type InitiativeType = '' | 'State' | 'National';
export type EndorsementType = 'PV Pledge' | 'Endorsement' | 'Recommendation';
export type AvatarBackgroundColor = 'blue' | 'yellow';
export type ElectionStatus = '' | 'Upcoming Primary' | 'Won Primary' | 'Elected' | 'Lost Primary' | 'Lost General' | 'Dropped Out';
export declare const zEndorsement: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
    state: z.ZodString;
    candidate_link: z.ZodString;
    link_label: z.ZodString;
    description: z.ZodString;
    is_state_initiative: z.ZodCoercedBoolean<unknown>;
    is_national_initiative: z.ZodCoercedBoolean<unknown>;
    is_pv_member: z.ZodCoercedBoolean<unknown>;
    took_pv_pledge: z.ZodCoercedBoolean<unknown>;
    img_url: z.ZodString;
    primary_election: z.ZodCoercedDate<unknown>;
    general_election: z.ZodCoercedDate<unknown>;
    initiative_level: z.ZodString;
    endorsement_level: z.ZodString;
    avatar_bg_color: z.ZodString;
    election_status: z.ZodString;
}, z.core.$strip>;
export type Endorsement = z.infer<typeof zEndorsement>;
//# sourceMappingURL=Endorsement.d.ts.map