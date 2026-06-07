import z from 'zod';
export declare const zCreateRoleRequest: z.ZodObject<{
    name: z.ZodString;
    permissionIds: z.ZodArray<z.ZodInt>;
}, z.core.$strip>;
export type CreateRoleRequest = z.infer<typeof zCreateRoleRequest>;
//# sourceMappingURL=CreateRoleRequest.d.ts.map