import z from 'zod';
export const zImageUploadResponse = z.object({
    url: z.url().max(200),
});
//# sourceMappingURL=ImageUploadResponse.js.map