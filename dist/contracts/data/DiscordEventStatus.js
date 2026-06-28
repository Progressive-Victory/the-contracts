import z from 'zod';
export var DiscordEventStatus;
(function (DiscordEventStatus) {
    DiscordEventStatus[DiscordEventStatus["Scheduled"] = 1] = "Scheduled";
    DiscordEventStatus[DiscordEventStatus["Active"] = 2] = "Active";
    DiscordEventStatus[DiscordEventStatus["Completed"] = 3] = "Completed";
    DiscordEventStatus[DiscordEventStatus["Cancelled"] = 4] = "Cancelled";
})(DiscordEventStatus || (DiscordEventStatus = {}));
export const zDiscordEventStatus = z.enum(DiscordEventStatus);
//# sourceMappingURL=DiscordEventStatus.js.map