import z, { util } from 'zod';
export declare const zIntParam: z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>;
export declare const zBoolQuery: z.ZodOptional<z.ZodPipe<z.ZodEnum<{
    true: "true";
    false: "false";
}>, z.ZodTransform<boolean, "true" | "false">>>;
export declare const zIntQuery: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodString, z.ZodTransform<number, string>>, z.ZodNumber>>;
export declare const zStringQuery: z.ZodOptional<z.ZodString>;
export declare const zStringParam: z.ZodString;
export declare const zEnumQuery: <const T extends util.EnumLike>(entries: T) => z.ZodOptional<z.ZodEnum<T>>;
export declare const zIntArrayQuery: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<number[], string>>>;
//# sourceMappingURL=types.d.ts.map