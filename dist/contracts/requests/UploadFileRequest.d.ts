import { type MultipartFile } from '@fastify/multipart';
import z from 'zod';
export declare const zUploadImageRequest: z.ZodObject<{
    image: z.ZodCustom<MultipartFile, MultipartFile>;
}, z.core.$strip>;
export type UploadImageRequest = z.infer<typeof zUploadImageRequest>;
export declare const zUploadFileRequest: z.ZodObject<{
    file: z.ZodCustom<MultipartFile, MultipartFile>;
}, z.core.$strip>;
export type UploadFileRequest = z.infer<typeof zUploadFileRequest>;
//# sourceMappingURL=UploadFileRequest.d.ts.map