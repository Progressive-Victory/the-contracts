import z from 'zod';
export declare const zDiscordSkillTeamRole: z.ZodObject<{
    memberRoleId: z.ZodString;
    teamName: z.ZodString;
    memberChannelId: z.ZodString;
    teamRoleId: z.ZodNullable<z.ZodString>;
    teamChannelId: z.ZodNullable<z.ZodString>;
    authorizedRoleId: z.ZodString;
}, z.core.$strip>;
export type DiscordSkillTeamRole = z.infer<typeof zDiscordSkillTeamRole>;
//# sourceMappingURL=DiscordSkillTeamRole.d.ts.map