import z from 'zod';

export type InitiativeType_t = '' | 'State' | 'National';
export type EndorsementType_t = 'PV Pledge' | 'Endorsement' | 'Recommendation';
export type AvatarBackgroundColor_t = 'blue' | 'yellow';
export type ElectionStatus_t =
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
	candidateLink: z.string(),
	linkLabel: z.string(),
	description: z.string(),
	isStateInitiative: z.coerce.boolean(),
	isNationalInitiative: z.coerce.boolean(),
	isPvMember: z.coerce.boolean(),
	tookPvPledge: z.coerce.boolean(),
	imgUrl: z.string(),
	primaryElection: z.coerce.date(),
	generalElection: z.coerce.date(),
	initiativeType: z.string(),
	endorsementType: z.string(),
	avatarBackgroundColor: z.string(),
	electionStatus: z.string(),
});

export type Endorsement = z.infer<typeof zEndorsement>;