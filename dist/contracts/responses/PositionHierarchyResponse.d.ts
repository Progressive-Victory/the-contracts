import z from 'zod';
export declare const zPositionHierarchyResponse: z.ZodObject<{
    positions: z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        name: z.ZodString;
        childIds: z.ZodArray<z.ZodInt>;
        userIds: z.ZodArray<z.ZodInt>;
    }, z.core.$strip>>;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        email: z.ZodNullable<z.ZodString>;
        preferredName: z.ZodNullable<z.ZodString>;
        firstName: z.ZodNullable<z.ZodString>;
        lastName: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString>;
        discordUsers: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            username: z.ZodString;
            image: z.ZodString;
            userId: z.ZodNullable<z.ZodNumber>;
            email: z.ZodNullable<z.ZodString>;
            status: z.ZodNullable<z.ZodEnum<typeof import("../data/DiscordUser.js").DiscordUserStatus>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PositionHierarchyResponse = z.infer<typeof zPositionHierarchyResponse>;
//# sourceMappingURL=PositionHierarchyResponse.d.ts.map