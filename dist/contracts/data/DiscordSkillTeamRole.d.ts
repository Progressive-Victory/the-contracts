import z from 'zod';
export declare const zDiscordSkillTeamRole: z.ZodObject<{
    teamRoleId: z.ZodString;
    teamName: z.ZodString;
    leadRoleId: z.ZodString;
    teamChannelId: z.ZodString;
}, z.core.$strip>;
export type DiscordSkillTeamRole = z.infer<typeof zDiscordSkillTeamRole>;
//# sourceMappingURL=DiscordSkillTeamRole.d.ts.map