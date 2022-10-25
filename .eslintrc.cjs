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
		// Eslint rules
		camelcase: ['warn', { properties: 'always' }],
		'comma-dangle': 'off',
		'eol-last': ['warn', 'always'],
		indent: 'off',
		'linebreak-style': ['error', 'unix'],
		'max-len': ['warn', {
			ignoreComments: true,
			tabWidth: 4,
		}],
		'no-undef': 'off',
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		// Vue rules
		'vue/component-definition-name-casing': ['error', 'PascalCase'],
		'vue/html-closing-bracket-newline': ['warn', {
			singleline: 'never',
			multiline: 'never',
		}],
		'vue/html-closing-bracket-spacing': ['warn', {
			startTag: 'never',
			endTag: 'never',
			selfClosingTag: 'always',
		}],
		'vue/html-indent': ['warn', 'tab', {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
		}],
		'vue/html-quotes': ['warn', 'double'],
		'vue/max-attributes-per-line': ['warn', {
			singleline: 2,
			multiline: 1,
		}],
		'vue/multi-word-component-names': 'off',
		'vue/multiline-html-element-content-newline': ['warn', {
			allowEmptyLines: false,
			ignores: ['pre'],
		}],
		// TypeScript rules
		'@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
		'@typescript-eslint/indent': ['warn', 'tab', { SwitchCase: 1 }],
	},
}
