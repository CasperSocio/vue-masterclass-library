module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'vue',
		'@typescript-eslint',
	],
	rules: {
		camelcase: ['warn', { properties: 'always' }],
		'comma-dangle': ['warn', 'always-multiline'],
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		'max-len': ['warn', {
			ignoreComments: true,
			tabWidth: 4,
		}],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'vue/html-indent': ['warn', 'tab', {
			alignAttributesVertically: true,
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
		}],
	},
}
