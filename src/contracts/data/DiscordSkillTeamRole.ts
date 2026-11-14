import z from 'zod';

export const zDiscordSkillTeamRole = z.object({
	memberRoleId: z.string().nonempty(),
	teamName: z.string().nonempty(),
	memberChannelId: z.string().nonempty(),
	teamRoleId: z.string().nonempty().nullable(),
	teamChannelId: z.string().nonempty().nullable(),
	authorizedRoleId: z.string().nonempty(),
});

export type DiscordSkillTeamRole = z.infer<typeof zDiscordSkillTeamRole>;
