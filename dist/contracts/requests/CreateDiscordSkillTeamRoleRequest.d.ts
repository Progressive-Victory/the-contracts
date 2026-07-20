import z from 'zod';
export declare const zCreateDiscordSkillTeamRoleRequest: z.ZodObject<{
    teamRoleId: z.ZodString;
    teamName: z.ZodString;
    leadRoleId: z.ZodString;
    teamChannelId: z.ZodString;
}, z.core.$strip>;
export type ICreateDiscordSkillTeamRoleRequest = z.infer<typeof zCreateDiscordSkillTeamRoleRequest>;
//# sourceMappingURL=CreateDiscordSkillTeamRoleRequest.d.ts.map