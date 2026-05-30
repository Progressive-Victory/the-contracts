import z from 'zod';
import { zNdaForm } from '~/contracts/data/NdaForm';

export const zNdaFormsResponse = z.object({
	forms: z.array(zNdaForm),
});

export type NdaFormsResponse = z.infer<typeof zNdaFormsResponse>;
