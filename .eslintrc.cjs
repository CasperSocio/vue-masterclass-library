module.exports = {
	env: {
		browser: true,
		es2021: true,
		'cypress/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:cypress/recommended',
	],
	overrides: [],
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	plugins: [
		'@typescript-eslint',
		'cypress',
		'vue',
	],
	root: true,
	rules: {
		camelcase: ['warn', { properties: 'always' }],
		'comma-dangle': 'off',
		'eol-last': ['warn', 'always'],
		indent: 'off',
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
		'@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
		'@typescript-eslint/indent': ['warn', 'tab', { SwitchCase: 1 }],
	},
}
