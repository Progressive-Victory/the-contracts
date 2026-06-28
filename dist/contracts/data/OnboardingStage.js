import z from 'zod';
// State management enum for join flow
export var OnboardingStage;
(function (OnboardingStage) {
    // The user has logged in but hasn't begun onboarding yet
    OnboardingStage["NOT_STARTED"] = "not_started";
    // Onboarding form has been submitted, but no SMS code has been entered.
    OnboardingStage["AWAITING_VERIFY"] = "awaiting_verify";
    // SMS code has been verified and the user is being joined to the server.
    OnboardingStage["VERIFIED"] = "verified";
    // The user is under 18 and isn't allowed to join the server.
    OnboardingStage["UNDERAGE"] = "underage";
    // The user is neither a US citizen nor resident and isn't allowed to join the server.
    OnboardingStage["NOT_CITIZEN"] = "not_citizen";
    // The user has joined the server successfully.
    OnboardingStage["JOINED"] = "joined";
    // The user was banned.
    OnboardingStage["BANNED"] = "banned";
})(OnboardingStage || (OnboardingStage = {}));
export const zOnboardingStage = z.enum(OnboardingStage);
//# sourceMappingURL=OnboardingStage.js.map