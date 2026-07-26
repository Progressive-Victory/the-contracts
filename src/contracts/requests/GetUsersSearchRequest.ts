import { zSearchRequest } from './SearchRequest.js';
import z from 'zod';
import { zBoolQuery, zIntArrayQuery } from '../../util/index.js';

export const zGetUsersSearchRequest = zSearchRequest.extend({
	isDonor: zBoolQuery,
	roleIds: zIntArrayQuery,
});

export type GetUsersSearchRequest = z.infer<typeof zGetUsersSearchRequest>;
