import z from 'zod';
export declare const zDiscordStateRole: z.ZodObject<{
    stateAbbreviation: z.ZodString;
    stateName: z.ZodString;
    memberRoleId: z.ZodString;
    memberChannelId: z.ZodString;
    teamRoleId: z.ZodString;
    teamChannelId: z.ZodString;
}, z.core.$strip>;
export type DiscordStateRole = z.infer<typeof zDiscordStateRole>;
//# sourceMappingURL=DiscordStateRole.d.ts.map