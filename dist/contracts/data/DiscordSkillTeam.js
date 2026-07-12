import z from 'zod';
export const zDiscordSkillTeam = z.object({
    teamRoleId: z.string().nonempty(),
    teamName: z.string().nonempty(),
    leadRoleId: z.string().nonempty(),
    teamChannelId: z.string().nonempty(),
});
//# sourceMappingURL=DiscordSkillTeam.js.map