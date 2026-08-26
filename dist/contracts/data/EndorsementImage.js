import { Readable } from 'node:stream';
import z from 'zod';
const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export const zImage = z.object({
    file: z.instanceof(Readable, { error: 'You must upload an image' }),
    filename: z.string(),
    mimetype: zAcceptedImageType,
    size: z.number().int().positive(),
});
//# sourceMappingURL=EndorsementImage.js.map