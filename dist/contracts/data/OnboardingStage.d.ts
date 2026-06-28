import z from 'zod';
export declare enum OnboardingStage {
    NOT_STARTED = "not_started",
    AWAITING_VERIFY = "awaiting_verify",
    VERIFIED = "verified",
    UNDERAGE = "underage",
    NOT_CITIZEN = "not_citizen",
    JOINED = "joined",
    BANNED = "banned"
}
export declare const zOnboardingStage: z.ZodEnum<typeof OnboardingStage>;
//# sourceMappingURL=OnboardingStage.d.ts.map