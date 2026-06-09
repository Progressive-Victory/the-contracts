import { zSearchRequest } from './SearchRequest.js';
import z from 'zod';
import { zBoolQuery, zIntArrayQuery } from '../../util/index.js';

export const zGetUsersSearchRequest = zSearchRequest.extend({
	roleIds: zIntArrayQuery,
	withDiscordUsers: zBoolQuery,
});

export type GetUsersSearchRequest = z.infer<typeof zGetUsersSearchRequest>;
