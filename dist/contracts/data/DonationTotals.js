import z from 'zod';
export var TotalType;
(function (TotalType) {
    TotalType["RECURRING"] = "recurring";
    TotalType["ONE_TIME"] = "one_time";
    TotalType["ALL"] = "all";
})(TotalType || (TotalType = {}));
export const zTotalType = z.enum(TotalType);
export const zDonationTotal = z.object({
    totalType: zTotalType,
    total: z.number(),
});
//# sourceMappingURL=DonationTotals.js.map