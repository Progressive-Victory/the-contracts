import esbuild from 'esbuild';

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
