import { type MultipartFile } from '@fastify/multipart';
import z from 'zod';
export declare const zUploadImageRequest: z.ZodObject<{
    image: z.ZodCustom<MultipartFile, MultipartFile>;
}, z.core.$strip>;
export type UploadImageRequest = z.infer<typeof zUploadImageRequest>;
//# sourceMappingURL=UploadImageRequest.d.ts.map