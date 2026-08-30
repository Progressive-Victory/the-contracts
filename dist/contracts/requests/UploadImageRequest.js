import z from 'zod';
// const zAcceptedImageType = z.enum(['image/jpeg', 'image/png']);
// export type AcceptedImageType = z.infer<typeof zAcceptedImageType>;
export const zUploadImageRequest = z.object({
    // image: z.custom<MultipartFile>().refine((file) => file?.file, {
    // 	message: 'The image is required.',
    // }),
    // .refine((file) => !file || zAcceptedImageType.parse(file.mimetype), {
    // 	message: 'Only images are allowed to be sent.',
    // }),
    image: z.custom(),
    // filename: z.string(),
    // mimetype: zAcceptedImageType,
});
//# sourceMappingURL=UploadImageRequest.js.map