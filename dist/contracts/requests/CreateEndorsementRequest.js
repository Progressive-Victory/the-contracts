import z from 'zod';
export const zCreateEndorsementRequest = z.object({
    name: z.string().nonempty().max(100),
    state: z.string().nonempty().max(13),
    description: z.string().nonempty().max(300),
    candidate_link: z.string().max(200).default(''),
    link_label: z.string().max(50).default(''),
    img_url: z.string().max(200).default(''),
    is_state_initiative: z.boolean().default(false),
    is_national_initiative: z.boolean().default(false),
    is_pv_member: z.boolean().default(false),
    took_pv_pledge: z.boolean().default(false),
    primary_election: z.coerce.date().nullable().default(null),
    general_election: z.coerce.date().nullable().default(null),
    initiative_level: z.string().max(20).default(''),
    endorsement_level: z.string().max(20).default(''),
    avatar_bg_color: z.string().max(20).default(''),
    election_status: z.string().max(20).default(''),
});
//# sourceMappingURL=CreateEndorsementRequest.js.map