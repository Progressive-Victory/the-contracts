import z from "zod";
import { zDiscordEvent, zDiscordUser } from "../data/index.js";

export const zDiscordEventDetailsResponse = z.object({
	event: zDiscordEvent,
	createdBy: zDiscordUser,
});
export type DiscordEventDetailsResponse = z.infer<
	typeof zDiscordEventDetailsResponse
>;