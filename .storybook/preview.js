import { app } from '@storybook/vue3'
import { createPinia } from 'pinia'
import '../src/style/main.css'

const pinia = createPinia()

app.use(pinia)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'requiredFirst'
  },
}