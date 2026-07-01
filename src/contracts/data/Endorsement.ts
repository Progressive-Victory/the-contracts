import z from 'zod';

export type InitiativeType = '' | 'State' | 'National';
export type EndorsementType = 'PV Pledge' | 'Endorsement' | 'Recommendation';
export type AvatarBackgroundColor = 'blue' | 'yellow';
export type ElectionStatus =
	| ''
	| 'Upcoming Primary'
	| 'Won Primary'
	| 'Elected'
	| 'Lost Primary'
	| 'Lost General'
	| 'Dropped Out';

export const zEndorsement = z.object({
	id: z.int(),
	name: z.string(),
	state: z.string(),
	candidate_link: z.string(),
	link_label: z.string(),
	description: z.string(),
	is_state_initiative: z.coerce.boolean(),
	is_national_initiative: z.coerce.boolean(),
	is_pv_member: z.coerce.boolean(),
	took_pv_pledge: z.coerce.boolean(),
	img_url: z.string(),
	primary_election: z.coerce.date(),
	general_election: z.coerce.date(),
	initiative_level: z.string(),
	endorsement_level: z.string(),
	avatar_bg_color: z.string(),
	election_status: z.string(),
});

export type Endorsement = z.infer<typeof zEndorsement>;
