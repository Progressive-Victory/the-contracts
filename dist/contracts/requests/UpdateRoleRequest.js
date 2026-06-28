import z from 'zod';
export const zUpdateRoleRequest = z.object({
    name: z.string().nonempty().optional(),
    permissionIds: z.array(z.int()).optional(),
});
//# sourceMappingURL=UpdateRoleRequest.js.map