import z from 'zod';
export declare const zUpdateDiscordStateRoleRequest: z.ZodObject<{
    stateName: z.ZodOptional<z.ZodString>;
    memberRoleId: z.ZodOptional<z.ZodString>;
    memberChannelId: z.ZodOptional<z.ZodString>;
    teamRoleId: z.ZodOptional<z.ZodString>;
    teamChannelId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IUpdateDiscordStateRoleRequest = z.infer<typeof zUpdateDiscordStateRoleRequest>;
//# sourceMappingURL=UpdateDiscordStateRoleRequest.d.ts.map