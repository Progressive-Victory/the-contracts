import { Readable } from 'node:stream';
import z from 'zod';
const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
export const zEndorsementImage = z.object({
    file: z.instanceof(Readable, { error: 'You must upload an image' }),
    filename: z.string(),
    mimetype: zAcceptedImageType,
});
//# sourceMappingURL=EndorsementImage.js.map