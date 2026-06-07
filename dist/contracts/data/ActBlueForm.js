import { zActBlueContribution } from './ActBlueContribution';
import z from 'zod';
export const zActBlueForm = z
    .object({
    name: z.string(),
    kind: z.string(),
    contributions: z.array(zActBlueContribution).optional(),
})
    .strict();
//# sourceMappingURL=ActBlueForm.js.map