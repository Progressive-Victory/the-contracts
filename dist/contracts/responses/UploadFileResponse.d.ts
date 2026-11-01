import z from 'zod';
export declare const zUploadImageResponse: z.ZodObject<{
    url: z.ZodURL;
}, z.core.$strip>;
export type UploadImageResponse = z.infer<typeof zUploadImageResponse>;
export declare const zUploadFileResponse: z.ZodObject<{
    url: z.ZodURL;
}, z.core.$strip>;
export type UploadFileResponse = z.infer<typeof zUploadFileResponse>;
//# sourceMappingURL=UploadFileResponse.d.ts.map