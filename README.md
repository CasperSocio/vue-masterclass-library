# Vue Masteclass Library

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Technologies

- JS framework - [Vue](https://vuejs.org/)
- Frontend tooling (builder) - [Vite](https://vitejs.dev/)
- Frontend workshop - [Storybook](https://storybook.js.org/)
- Linting
	- [ESLint](https://eslint.org/)
	- [ESLint-plugin-vue](https://eslint.vuejs.org/)
	- [TypeScript ESLint](https://typescript-eslint.io/)
- Programming language - [TypeScript](https://www.typescriptlang.org/)
- State management - [Pinia](https://pinia.vuejs.org/)
- Styling language - [Sass](https://sass-lang.com/)
- Test suite - [Cypress](https://www.cypress.io/)

## Get Started

Run `npm ci` to install dependencies.

Run `npm run dev` to start design system server.

Run `npm test` to open the testing suite (Cypress).
