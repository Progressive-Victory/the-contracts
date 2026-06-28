import z from 'zod';
export const zUpdateSettingRequest = z.object({
    value: z.string().max(100).nonempty(),
});
//# sourceMappingURL=UpdateSettingRequest.js.map