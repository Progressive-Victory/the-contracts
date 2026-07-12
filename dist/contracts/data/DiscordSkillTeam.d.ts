import z from 'zod';
export declare const zDiscordSkillTeam: z.ZodObject<{
    teamRoleId: z.ZodString;
    teamName: z.ZodString;
    leadRoleId: z.ZodString;
    teamChannelId: z.ZodString;
}, z.core.$strip>;
export type DiscordSkillTeam = z.infer<typeof zDiscordSkillTeam>;
//# sourceMappingURL=DiscordSkillTeam.d.ts.map