import z from 'zod';
export declare enum PositionTypes {
    POSITION = 0,
    GROUP = 1
}
export declare enum RelationshipTypes {
    OWNER = 0
}
export declare const zPositionTypes: z.ZodEnum<typeof PositionTypes>;
export declare const zRelationalTypes: z.ZodEnum<typeof RelationshipTypes>;
export declare const zPosition: z.ZodObject<{
    id: z.ZodInt;
    name: z.ZodString;
    childIds: z.ZodArray<z.ZodInt>;
    userIds: z.ZodArray<z.ZodInt>;
    type: z.ZodEnum<typeof PositionTypes>;
    seats: z.ZodInt;
}, z.core.$strip>;
export type Position = z.infer<typeof zPosition>;
//# sourceMappingURL=Position.d.ts.map