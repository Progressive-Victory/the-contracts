import { zMutationRequest } from './MutationRequest';
import z from 'zod';
export const zActBlueDonorLinkRequest = zMutationRequest.extend({
    userId: z.number().nullable(),
});
//# sourceMappingURL=ActBlueDonorLinkRequest.js.map