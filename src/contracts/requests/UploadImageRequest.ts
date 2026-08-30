import { type MultipartFile } from '@fastify/multipart';
import z from 'zod';

// const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
// export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;

export const zUploadImageRequest = z.object({
	// image: z.custom<MultipartFile>().refine((file) => file?.file, {
	// 	message: 'The image is required.',
	// }),
	// .refine((file) => !file || zAcceptedImageType.parse(file.mimetype), {
	// 	message: 'Only images are allowed to be sent.',
	// }),
	image: z.custom<MultipartFile>(),
	// filename: z.string(),
	// mimetype: zAcceptedImageType,
});

export type UploadImageRequest = z.infer<typeof zUploadImageRequest>;
