import z from 'zod';

export const zUpdateEndorsementRequest = z.object({
	name: z.string().nonempty().max(100).optional(),
	description: z.string().nonempty().max(300).optional(),
	candidateLink: z.string().max(200).optional(),
	linkLabel: z.string().max(50).optional(),
	imgUrl: z.string().max(200).optional(),
	isStateInitiative: z.boolean().optional(),
	isNationalInitiative: z.boolean().optional(),
	isPvMember: z.boolean().optional(),
	tookPvPledge: z.boolean().optional(),
});

export type UpdateEndorsementRequest = z.infer<
	typeof zUpdateEndorsementRequest
>;
