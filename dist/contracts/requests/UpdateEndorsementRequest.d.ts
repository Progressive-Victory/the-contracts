import z from 'zod';
export declare const zUpdateEndorsementRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    candidate_link: z.ZodOptional<z.ZodString>;
    link_label: z.ZodOptional<z.ZodString>;
    img_url: z.ZodOptional<z.ZodString>;
    is_state_initiative: z.ZodOptional<z.ZodBoolean>;
    is_national_initiative: z.ZodOptional<z.ZodBoolean>;
    is_pv_member: z.ZodOptional<z.ZodBoolean>;
    took_pv_pledge: z.ZodOptional<z.ZodBoolean>;
    primary_election: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    general_election: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    initiative_level: z.ZodOptional<z.ZodString>;
    endorsement_level: z.ZodOptional<z.ZodString>;
    avatar_bg_color: z.ZodOptional<z.ZodString>;
    election_status: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateEndorsementRequest = z.infer<typeof zUpdateEndorsementRequest>;
//# sourceMappingURL=UpdateEndorsementRequest.d.ts.map