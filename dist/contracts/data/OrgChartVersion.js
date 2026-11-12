import z from 'zod';
export const zOrgChartVersion = z.object({
    versionNumber: z.number().int().positive(),
    fileHref: z.string(),
});
//# sourceMappingURL=OrgChartVersion.js.map