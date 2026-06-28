import { zMetaData } from '../data/MetaData.js';
import z from 'zod';
export const zMutationRequest = z.object({
    metaData: zMetaData.optional(),
});
//# sourceMappingURL=MutationRequest.js.map