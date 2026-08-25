import z from 'zod';
export declare const zUpdateDiscordSkillTeamRoleRequest: z.ZodObject<{
    teamName: z.ZodOptional<z.ZodString>;
    leadRoleId: z.ZodOptional<z.ZodString>;
    teamChannelId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IUpdateDiscordSkillTeamRoleRequest = z.infer<typeof zUpdateDiscordSkillTeamRoleRequest>;
//# sourceMappingURL=UpdateDiscordSkillTeamRoleRequest.d.ts.map