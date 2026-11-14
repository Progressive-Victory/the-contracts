import z from 'zod';
export declare const zUpdateDiscordSkillTeamRoleRequest: z.ZodObject<{
    teamName: z.ZodOptional<z.ZodString>;
    memberChannelId: z.ZodOptional<z.ZodString>;
    teamRoleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    teamChannelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorizedRoleId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IUpdateDiscordSkillTeamRoleRequest = z.infer<typeof zUpdateDiscordSkillTeamRoleRequest>;
//# sourceMappingURL=UpdateDiscordSkillTeamRoleRequest.d.ts.map