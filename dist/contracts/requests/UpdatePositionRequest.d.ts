import z from 'zod';
export declare const zUpdatePositionRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    childRelationships: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        type: z.ZodEnum<typeof import("../data/Position.js").RelationshipTypes>;
    }, z.core.$strip>>>;
    userIds: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    positionType: z.ZodEnum<typeof import("../data/Position.js").PositionTypes>;
    seats: z.ZodInt;
}, z.core.$strip>;
export type UpdatePositionRequest = z.infer<typeof zUpdatePositionRequest>;
//# sourceMappingURL=UpdatePositionRequest.d.ts.map