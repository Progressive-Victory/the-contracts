import z from 'zod';
export declare const zCreateEndorsementRequest: z.ZodObject<{
    name: z.ZodString;
    state: z.ZodString;
    description: z.ZodString;
    candidate_link: z.ZodDefault<z.ZodString>;
    link_label: z.ZodDefault<z.ZodString>;
    img_url: z.ZodDefault<z.ZodString>;
    is_state_initiative: z.ZodDefault<z.ZodBoolean>;
    is_national_initiative: z.ZodDefault<z.ZodBoolean>;
    is_pv_member: z.ZodDefault<z.ZodBoolean>;
    took_pv_pledge: z.ZodDefault<z.ZodBoolean>;
    primary_election: z.ZodDefault<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    general_election: z.ZodDefault<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    initiative_level: z.ZodDefault<z.ZodString>;
    endorsement_level: z.ZodDefault<z.ZodString>;
    avatar_bg_color: z.ZodDefault<z.ZodString>;
    election_status: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
export type CreateEndorsementRequest = z.infer<typeof zCreateEndorsementRequest>;
//# sourceMappingURL=CreateEndorsementRequest.d.ts.map