import z from 'zod';
export declare enum DiscordEventStatus {
    Scheduled = 1,
    Active = 2,
    Completed = 3,
    Cancelled = 4
}
export declare const zDiscordEventStatus: z.ZodEnum<typeof DiscordEventStatus>;
//# sourceMappingURL=DiscordEventStatus.d.ts.map