import { type MultipartFile } from '@fastify/multipart';
import z from 'zod';

export const zUploadImageRequest = z.object({
	image: z.custom<MultipartFile>(),
});

export type UploadImageRequest = z.infer<typeof zUploadImageRequest>;
