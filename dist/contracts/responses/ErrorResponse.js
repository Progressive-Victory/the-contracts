import z from 'zod';
export const zErrorResponse = z.object({
    error: z.string().nonempty(),
    message: z.string().optional(),
});
//# sourceMappingURL=ErrorResponse.js.map