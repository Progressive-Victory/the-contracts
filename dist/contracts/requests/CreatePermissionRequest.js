import z from 'zod';
export const zCreatePermissionRequest = z.object({
    name: z.string().nonempty(),
});
//# sourceMappingURL=CreatePermissionRequest.js.map