import z from 'zod';
export declare function zPaginatedResponse<Shape extends z.ZodObject>(zData: Shape): z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    count: z.ZodNumber;
    data: z.ZodArray<Shape>;
}, z.core.$strip>;
export interface PaginatedResponse<T> {
    page: number;
    limit: number;
    count: number;
    data: T[];
}
//# sourceMappingURL=PaginatedResponse.d.ts.map