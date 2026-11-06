import z from 'zod';
export declare const zOrgChartVersion: z.ZodObject<{
    versionNumber: z.ZodNumber;
    fileHref: z.ZodString;
}, z.core.$strip>;
export type OrgChartVersion = z.infer<typeof zOrgChartVersion>;
//# sourceMappingURL=OrgChartVersion.d.ts.map