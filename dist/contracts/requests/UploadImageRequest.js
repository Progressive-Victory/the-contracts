import { Readable } from 'node:stream';
import z from 'zod';
const MAX_FILE_SIZE = 50 * 1024 * 1024;
const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export const zUploadImageRequest = z.object({
    file: z.instanceof(Readable, { error: 'You must upload an image' }),
    filename: z.string(),
    mimetype: zAcceptedImageType,
    size: z
        .number()
        .int()
        .positive()
        .max(MAX_FILE_SIZE, `File must not exceed ${MAX_FILE_SIZE / 1024 / 1024}MB.`),
});
//# sourceMappingURL=UploadImageRequest.js.map