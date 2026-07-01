import esbuild from 'esbuild';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
await esbuild.build({
	platform: 'node',
	target: 'esnext',
	format: 'esm',
	outdir: 'dist',
	sourcemap: true,
	minify: false,
	bundle: true,
	legalComments: 'external',
	packages: 'external',
});
