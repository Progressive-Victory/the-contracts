import z from 'zod';
export var PositionTypes;
(function (PositionTypes) {
    PositionTypes[PositionTypes["POSITION"] = 0] = "POSITION";
    PositionTypes[PositionTypes["GROUP"] = 1] = "GROUP";
})(PositionTypes || (PositionTypes = {}));
export var RelationshipTypes;
(function (RelationshipTypes) {
    RelationshipTypes[RelationshipTypes["OWNER"] = 0] = "OWNER";
})(RelationshipTypes || (RelationshipTypes = {}));
export const zPositionTypes = z.enum(PositionTypes);
export const zRelationshipTypes = z.enum(RelationshipTypes);
export const zRelationship = z.object({
    id: z.int(),
    relationshipType: zRelationshipTypes,
});
export const zPosition = z.object({
    id: z.int(),
    name: z.string(),
    childRelationships: z.array(zRelationship),
    userIds: z.array(z.int()),
    type: zPositionTypes,
    seats: z.int(),
});
//# sourceMappingURL=Position.js.map