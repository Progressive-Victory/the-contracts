import z from 'zod';
export declare const zErrorResponse: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ErrorResponse = z.infer<typeof zErrorResponse>;
//# sourceMappingURL=ErrorResponse.d.ts.map