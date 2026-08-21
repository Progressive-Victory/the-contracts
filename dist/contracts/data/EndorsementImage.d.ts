import z from 'zod';
declare const zAcceptedImageType: z.ZodEnum<{
    "image/jpeg": "image/jpeg";
    "image/png": "image/png";
}>;
export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;
export declare const zEndorsementImage: z.ZodCustom<File, File>;
export type EndorsementImage = z.infer<typeof zEndorsementImage>;
export {};
//# sourceMappingURL=EndorsementImage.d.ts.map