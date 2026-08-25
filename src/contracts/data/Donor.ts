import { zDonation } from './Donation.js';
import { zMembership } from './Membership.js';
import { zShippingStatus } from './ShippingStatus.js';
import z from 'zod';

export const zDonor = z.object({
	name: z.string(),
	email: z.string(),
	phone: z.string().nullable(),
	discordUsername: z.string(),

	shippingName: z.string(),
	shippingAddress: z.string(),
	shippingStatus: zShippingStatus,

	donations: z.array(zDonation).nullable(),
	MembershipData: zMembership.nullable()
});

export type Donor = z.infer<typeof zDonor>;
