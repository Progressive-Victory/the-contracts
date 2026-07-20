import z from 'zod';

export const zUpdateDiscordSkillTeamRoleRequest = z.object({
    teamRoleId: z.string().nonempty().optional(),
    teamName: z.string().nonempty().optional(),
    leadRoleId: z.string().nonempty().optional(),
    teamChannelId: z.string().nonempty().optional(),
});

export type IUpdateDiscordSkillTeamRoleRequest = z.infer<
    typeof zUpdateDiscordSkillTeamRoleRequest
>;
