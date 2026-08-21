import z from 'zod';

// Limiting to 50 MB since vercel serverless instances are not long-lived
const MAX_FILE_SIZE = 50 * 1024 * 1024;
const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;

const zEndorsementImage = z
	.instanceof(File, { error: 'You must upload an image' })
	.refine((f) => f.size > 0, 'Image is empty')
	.refine(
		(f) => f.size <= MAX_FILE_SIZE,
		`Image must be smaller than ${MAX_FILE_SIZE / 1024 / 1024}`
	)
	.refine(
		(f) => zAcceptedImageType.safeParse(f.type).success,
		'Image must be PNG or JPEG'
	);

export type EndorsementImage = z.infer<typeof zEndorsementImage>;
