import z from 'zod';

// Implicit enums will convert into numbers when creating database entries, which we do not want
export enum InitiativeType {
	State = 'State',
	National = 'National',
}
export enum EndorsementType {
	PVPledge = 'PV Pledge',
	Endorsement = 'Endorsement',
	Recommendation = 'Recommendation',
}
export enum AvatarBgColor {
	Blue = 'Blue',
	Yellow = 'Yellow',
}
export enum ElectionStatus {
	UpcomingPrimary = 'Upcoming Primary',
	WonPrimary = 'Won Primary',
	Elected = 'Elected',
	LostPrimary = 'Lost Primary',
	LostGeneral = 'Lost General',
	DroppedOut = 'Dropped Out',
}

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
	primaryElection: z.coerce.date().nullable(),
	generalElection: z.coerce.date().nullable(),
	initiativeLevel: z.enum(InitiativeType),
	endorsementLevel: z.enum(EndorsementType),
	avatarBgColor: z.enum(AvatarBgColor),
	electionStatus: z.enum(ElectionStatus).nullable(),
});

export type Endorsement = z.infer<typeof zEndorsement>;
