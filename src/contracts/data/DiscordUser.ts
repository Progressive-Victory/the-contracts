import z from 'zod';

/**
 * Discord User records should initially be created with a status of NotJoined.
 * Records that exist prior to the creation of the status field will have a NULL
 * status initially. A NULL status should be treated as unknown and the discord
 * API should be queried and the result saved on this record.
 */
export enum DiscordServerStatus {
	NotJoined = 0,
	Joined = 1,
	Left = 2,
	Banned = 3,
}

export const zDiscordUser = z.object({
	id: z.string(),
	username: z.string(),
	image: z.string(),
	userId: z.number().nullable(),
	email: z.string().nullable(),
	status: z.enum(DiscordServerStatus).nullable(),
});

export type DiscordUser = z.infer<typeof zDiscordUser>;
