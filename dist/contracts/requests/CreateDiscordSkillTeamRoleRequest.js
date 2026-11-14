import z from 'zod';
export const zCreateDiscordSkillTeamRoleRequest = z.object({
    memberRoleId: z.string().nonempty(),
    teamName: z.string().nonempty(),
    memberChannelId: z.string().nonempty(),
    teamRoleId: z.string().nonempty().nullable().optional(),
    teamChannelId: z.string().nonempty().nullable().optional(),
    authorizedRoleId: z.string().nonempty(),
});
//# sourceMappingURL=CreateDiscordSkillTeamRoleRequest.js.map