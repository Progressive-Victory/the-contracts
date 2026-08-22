import { Readable } from 'node:stream';
import z from 'zod';
declare const zAcceptedImageType: z.ZodEnum<{
    "image/jpeg": "image/jpeg";
    "image/png": "image/png";
}>;
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;
export declare const zEndorsementImage: z.ZodObject<{
    file: z.ZodCustom<Readable, Readable>;
    filename: z.ZodString;
    mimetype: z.ZodEnum<{
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
    }>;
}, z.core.$strip>;
export type EndorsementImage = z.infer<typeof zEndorsementImage>;
export {};
//# sourceMappingURL=EndorsementImage.d.ts.map