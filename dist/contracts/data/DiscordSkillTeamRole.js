import z from 'zod';
export const zDiscordSkillTeamRole = z.object({
    teamRoleId: z.string().nonempty(),
    teamName: z.string().nonempty(),
    leadRoleId: z.string().nonempty(),
    teamChannelId: z.string().nonempty(),
});
//# sourceMappingURL=DiscordSkillTeamRole.js.map