import { zNdaForm } from '../data/index.js';
import z from 'zod';
export const zNdaFormsResponse = z.object({
    forms: z.array(zNdaForm),
});
//# sourceMappingURL=NdaFormsResponse.js.map