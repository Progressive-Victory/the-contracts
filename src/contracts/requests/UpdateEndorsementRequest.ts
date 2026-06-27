import z from 'zod';

// This is not meaningfully different than CreateEndorsementRequest which isn't meaningfully different than Endorsement
// So edit all three, as I doubt there's a way to eliminate redundancy
export const zUpdateEndorsementRequest = z.object({
	name: z.string().nonempty().max(100).optional(),
	state: z.string().nonempty().max(13).optional(),
	description: z.string().nonempty().max(300).optional(),
	candidateLink: z.string().max(200).optional(),
	linkLabel: z.string().max(50).optional(),
	imgUrl: z.string().max(200).optional(),
	isStateInitiative: z.boolean().optional(),
	isNationalInitiative: z.boolean().optional(),
	isPvMember: z.boolean().optional(),
	tookPvPledge: z.boolean().optional(),
	primaryElection: z.coerce.date().optional(),
	generalElection: z.coerce.date().optional(),
	initiativeType: z.string().max(20).optional(),
	endorsementType: z.string().max(20).optional(),
	avatarBackgroundColor: z.string().max(20).optional(),
	electionStatus: z.string().max(20).optional(),
});

export type UpdateEndorsementRequest = z.infer<
	typeof zUpdateEndorsementRequest
>;
