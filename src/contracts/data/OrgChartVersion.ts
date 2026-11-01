import z from 'zod';

export const zOrgChartVersion = z.object({
	versionNumber: z.number().int().positive(),
	fileHref: z.string(),
});
export type OrgChartVersion = z.infer<typeof zOrgChartVersion>;
