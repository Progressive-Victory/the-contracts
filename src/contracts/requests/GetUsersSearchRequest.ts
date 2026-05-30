import { zSearchRequest } from './SearchRequest';
import z from 'zod';
import { zBoolQuery, zIntArrayQuery } from '../../util';

export const zGetUsersSearchRequest = zSearchRequest.extend({
	roleIds: zIntArrayQuery,
	withDiscordUsers: zBoolQuery,
});

export type GetUsersSearchRequest = z.infer<typeof zGetUsersSearchRequest>;
