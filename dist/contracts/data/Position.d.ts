import z from 'zod';
export declare enum PositionTypes {
    POSITION = 0,
    GROUP = 1
}
export declare enum RelationshipTypes {
    OWNER = 0
}
export declare const zPositionTypes: z.ZodEnum<typeof PositionTypes>;
export declare const zRelationshipTypes: z.ZodEnum<typeof RelationshipTypes>;
export declare const zRelationship: z.ZodObject<{
    id: z.ZodInt;
    type: z.ZodEnum<typeof RelationshipTypes>;
}, z.core.$strip>;
export type Relationship = z.infer<typeof zRelationship>;
export declare const zPosition: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
    childRelationships: z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        type: z.ZodEnum<typeof RelationshipTypes>;
    }, z.core.$strip>>;
    userIds: z.ZodArray<z.ZodInt>;
    type: z.ZodEnum<typeof PositionTypes>;
    seats: z.ZodInt;
    permissions: z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Position = z.infer<typeof zPosition>;
//# sourceMappingURL=Position.d.ts.map