import z from 'zod';
export const zUploadImageResponse = z.object({
    url: z.url().max(200),
});
//# sourceMappingURL=UploadImageResponse.js.map