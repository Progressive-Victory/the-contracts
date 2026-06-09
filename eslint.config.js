import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginIndexFile from '@progressive-victory/eslint-plugin-index-file'
import eslintPluginImport from 'eslint-plugin-import'

export default defineConfig([
	{
		ignores: ['dist/**', 'eslint.config.js'],
	},
	{
		files: ['**/*.ts,mts,cts,jsx,tsx,'],
		plugins: { js, eslintPluginIndexFile },
		extends: ['js/recommended', 'eslintPluginIndexFile/recommended'],
		languageOptions: { 
			globals: { ...globals.browser, ...globals.node },
		},
	},
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	eslintPluginIndexFile.configs.recommended,
	eslintPluginImport.flatConfigs.recommended,
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
			'eslint-plugin-index-file/enforce-import-from-index': 'off',
			'import/extensions': ["error", "always", {"js": "always"}],
			'import/no-unresolved': 'off',
			'import/no-named-as-default': 'off'
		},
	},
])