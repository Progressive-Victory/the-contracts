import z from 'zod';

export const zCreateUserRequest = z
	.object({
		email: z.string().max(100).nonempty(),
	})
	.strict();

export type CreateUserRequest = z.infer<typeof zCreateUserRequest>;
