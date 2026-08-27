import z from 'zod';
const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export const zUploadImageRequest = z.object({
    filename: z.string(),
    mimetype: zAcceptedImageType,
});
//# sourceMappingURL=UploadImageRequest.js.map