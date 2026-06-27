import z from 'zod';
export const zIntParam = z.string().transform((str) => +str);
export const zBoolQuery = z
    .enum(['true', 'false'])
    .optional()
    .transform((x) => x === 'true')
    .pipe(z.boolean());
export const zIntQuery = z
    .string()
    .optional()
    .transform((x) => (x === undefined ? undefined : Number(x)))
    .pipe(z.number().optional());
export const zStringQuery = z.string().optional();
export const zStringParam = z.string().nonempty();
export const zEnumQuery = (entries) => z.enum(entries).optional();
export const zIntArrayQuery = z
    .string()
    .transform((list, ctx) => {
    const parsed = list.split(',').map((item) => +item);
    if (parsed.some((num) => isNaN(num))) {
        ctx.addIssue({
            code: 'custom',
            message: `Int arrays must be provided as num1,num2,num3 etc., but got: ${list}`,
            fatal: true,
        });
        return z.NEVER;
    }
    return parsed;
})
    .optional();
//# sourceMappingURL=types.js.map