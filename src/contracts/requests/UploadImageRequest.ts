import z from 'zod';

const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;

export const zUploadImageRequest = z.object({
	filename: z.string(),
	mimetype: zAcceptedImageType,
});

export type UploadImageRequest = z.infer<typeof zUploadImageRequest>;
