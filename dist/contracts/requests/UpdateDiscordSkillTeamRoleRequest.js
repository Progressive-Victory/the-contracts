import z from 'zod';
export const zUpdateDiscordSkillTeamRoleRequest = z.object({
    teamName: z.string().nonempty().optional(),
    leadRoleId: z.string().nonempty().optional(),
    teamChannelId: z.string().nonempty().optional(),
});
//# sourceMappingURL=UpdateDiscordSkillTeamRoleRequest.js.map