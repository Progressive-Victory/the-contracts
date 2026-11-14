import z from 'zod';
export declare const zCreateDiscordSkillTeamRoleRequest: z.ZodObject<{
    memberRoleId: z.ZodString;
    teamName: z.ZodString;
    memberChannelId: z.ZodString;
    teamRoleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    teamChannelId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    authorizedRoleId: z.ZodString;
}, z.core.$strip>;
export type ICreateDiscordSkillTeamRoleRequest = z.infer<typeof zCreateDiscordSkillTeamRoleRequest>;
//# sourceMappingURL=CreateDiscordSkillTeamRoleRequest.d.ts.map