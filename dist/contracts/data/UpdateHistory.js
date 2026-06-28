import z from 'zod';
export var UpdateHistoryType;
(function (UpdateHistoryType) {
    UpdateHistoryType["Inserted"] = "I";
    UpdateHistoryType["Updated"] = "U";
    UpdateHistoryType["Merged"] = "M";
    UpdateHistoryType["Deleted"] = "D";
})(UpdateHistoryType || (UpdateHistoryType = {}));
export const zUpdateHistoryType = z.enum(UpdateHistoryType);
const zUpdateHistoryBase = z.object({
    historyId: z.int(),
    historyType: zUpdateHistoryType,
    historyDataSource: z.string().nullable(),
    historyWhoUpdatedId: z.int().nullable(),
    historyWhenUpdatedUtc: z.coerce.date(),
});
export const zUpdateHistory = (zData) => zUpdateHistoryBase.extend(zData.shape);
//# sourceMappingURL=UpdateHistory.js.map