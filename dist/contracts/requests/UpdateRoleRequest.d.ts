import z from 'zod';
export declare const zUpdateRoleRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    permissionIds: z.ZodOptional<z.ZodArray<z.ZodInt>>;
}, z.core.$strip>;
export type UpdateRoleRequest = z.infer<typeof zUpdateRoleRequest>;
//# sourceMappingURL=UpdateRoleRequest.d.ts.map