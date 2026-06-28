import z from 'zod';
import { zNdaForm } from '../data/index.js';
export const zNdaFormsResponse = z.object({
    forms: z.array(zNdaForm),
});
//# sourceMappingURL=NdaFormsResponse.js.map