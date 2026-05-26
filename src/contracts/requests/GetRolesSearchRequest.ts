import { zSearchRequest } from './SearchRequest';
import z from 'zod';
import { zIntArrayQuery } from '~/util';

export const zGetRolesSearchRequest = zSearchRequest.extend({
	permissionIds: zIntArrayQuery,
});

export type GetRolesSearchRequest = z.infer<typeof zGetRolesSearchRequest>;
