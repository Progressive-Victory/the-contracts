import z from 'zod';
export const zUpdatePermissionRequest = z.object({
    name: z.string().nonempty().optional(),
});
//# sourceMappingURL=UpdatePermissionRequest.js.map