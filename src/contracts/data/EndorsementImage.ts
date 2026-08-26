import { Readable } from 'node:stream';
import z from 'zod';

const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;

export const zImage = z.object({
	file: z.instanceof(Readable, { error: 'You must upload an image' }),
	filename: z.string(),
	mimetype: zAcceptedImageType,
	size: z.number().int().positive(),
});

export type EndorsementImage = z.infer<typeof zImage>;
