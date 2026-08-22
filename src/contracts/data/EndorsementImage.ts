import { Readable } from 'node:stream';
import z from 'zod';

const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;

export const zEndorsementImage = z.object({
	file: z.instanceof(Readable, { error: 'You must upload an image' }),
	filename: z.string(),
	mimetype: zAcceptedImageType,
});

export type EndorsementImage = z.infer<typeof zEndorsementImage>;
