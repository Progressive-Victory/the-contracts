import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
	{
		ignores: ['dist/**'],
	},
	{
		files: ['**/*.ts,mts,cts,jsx,tsx'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
    {
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.js']
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'object-shorthand': 'warn',
			'@typescript-eslint/no-unsafe-assignment': 'warn',
			'@typescript-eslint/no-unsafe-member-access': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/no-unsafe-enum-comparison': 'off',
			'@typescript-eslint/no-unsafe-call': 'warn',
			'@typescript-eslint/no-unsafe-return': 'warn',
		},
	},
])