import z from 'zod';
import * as core from 'zod/v4/core';
export declare function zPaginatedResponse<Shape extends core.$ZodShape>(zData: z.ZodObject<Shape>): z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    count: z.ZodNumber;
    data: z.ZodArray<z.ZodObject<Shape, z.core.$strip>>;
}, z.core.$strip>;
export interface PaginatedResponse<T> {
    page: number;
    limit: number;
    count: number;
    data: T[];
}
//# sourceMappingURL=PaginatedResponse.d.ts.map