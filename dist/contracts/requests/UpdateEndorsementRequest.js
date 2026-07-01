import z from 'zod';
// This is not meaningfully different than CreateEndorsementRequest which isn't meaningfully different than Endorsement
// So edit all three, as I doubt there's a way to eliminate redundancy
export const zUpdateEndorsementRequest = z.object({
    name: z.string().nonempty().max(100).optional(),
    state: z.string().nonempty().max(13).optional(),
    description: z.string().nonempty().max(300).optional(),
    candidate_link: z.string().max(200).optional(),
    link_label: z.string().max(50).optional(),
    img_url: z.string().max(200).optional(),
    is_state_initiative: z.boolean().optional(),
    is_national_initiative: z.boolean().optional(),
    is_pv_member: z.boolean().optional(),
    took_pv_pledge: z.boolean().optional(),
    primary_election: z.coerce.date().optional(),
    general_election: z.coerce.date().optional(),
    initiative_level: z.string().max(20).optional(),
    endorsement_level: z.string().max(20).optional(),
    avatar_bg_color: z.string().max(20).optional(),
    election_status: z.string().max(20).optional(),
});
//# sourceMappingURL=UpdateEndorsementRequest.js.map