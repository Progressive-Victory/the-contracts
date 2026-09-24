import z from 'zod';
export declare const zCreatePositionRequest: z.ZodObject<{
    name: z.ZodString;
    parentRelationships: z.ZodArray<z.ZodObject<{
        id: z.ZodInt;
        relationshipType: z.ZodEnum<typeof import("../data/Position.js").RelationshipTypes>;
    }, z.core.$strip>>;
    positionType: z.ZodEnum<typeof import("../data/Position.js").PositionTypes>;
    seats: z.ZodInt;
}, z.core.$strip>;
export type CreatePositionRequest = z.infer<typeof zCreatePositionRequest>;
//# sourceMappingURL=CreatePositionRequest.d.ts.map