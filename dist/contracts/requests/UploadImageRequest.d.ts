import { Readable } from 'node:stream';
import z from 'zod';
declare const zAcceptedImageType: z.ZodEnum<{
    "image/jpeg": "image/jpeg";
    "image/png": "image/png";
}>;
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;
export declare const zUploadImageRequest: z.ZodObject<{
    file: z.ZodCustom<Readable, Readable>;
    filename: z.ZodString;
    mimetype: z.ZodEnum<{
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
    }>;
    size: z.ZodNumber;
}, z.core.$strip>;
export type UploadImageRequest = z.infer<typeof zUploadImageRequest>;
export {};
//# sourceMappingURL=UploadImageRequest.d.ts.map