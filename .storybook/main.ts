import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  docs: {
    autodocs: true,
  },
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: ['../src/components', '../src/stories'],
}

export default config
