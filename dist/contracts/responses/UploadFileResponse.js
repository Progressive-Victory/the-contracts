import z from 'zod';
export const zUploadImageResponse = z.object({
    url: z.url().max(200),
});
export const zUploadFileResponse = z.object({
    url: z.url().max(200),
});
//# sourceMappingURL=UploadFileResponse.js.map