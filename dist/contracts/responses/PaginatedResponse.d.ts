import z from 'zod';
export declare function zPaginatedResponse<S extends z.ZodObject>(zData: S): z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    count: z.ZodNumber;
    data: z.ZodArray<S>;
}, z.core.$strip>;
export interface PaginatedResponse<T> {
    page: number;
    limit: number;
    count: number;
    data: T[];
}
//# sourceMappingURL=PaginatedResponse.d.ts.map