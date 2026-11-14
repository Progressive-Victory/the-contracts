import z from 'zod';
export const zUpdateDiscordSkillTeamRoleRequest = z.object({
    teamName: z.string().nonempty().optional(),
    memberChannelId: z.string().nonempty().optional(),
    teamRoleId: z.string().nonempty().nullable().optional(),
    teamChannelId: z.string().nonempty().nullable().optional(),
    authorizedRoleId: z.string().nonempty().optional(),
});
//# sourceMappingURL=UpdateDiscordSkillTeamRoleRequest.js.map