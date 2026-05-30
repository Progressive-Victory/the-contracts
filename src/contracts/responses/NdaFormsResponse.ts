import z from 'zod';
import { zNdaForm } from '../data';

export const zNdaFormsResponse = z.object({
	forms: z.array(zNdaForm),
});

export type NdaFormsResponse = z.infer<typeof zNdaFormsResponse>;
