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
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'cypress', 'prettier', 'vue'],
  root: true,
  rules: {
    camelcase: [
      'warn',
      {
        properties: 'always',
      },
    ],
    'comma-dangle': 'off',
    'eol-last': 'off',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],

    // Vue
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-indent': [
      'warn',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
      },
    ],
    'vue/html-quotes': ['warn', 'double'],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 2,
        multiline: 1,
      },
    ],
    'vue/max-len': [
      'warn',
      {
        code: 100,
        comments: 120,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
        tabWidth: 2,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': [
      'warn',
      {
        allowEmptyLines: false,
        ignores: ['pre'],
      },
    ],

    // TypeScript
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
  },
}
