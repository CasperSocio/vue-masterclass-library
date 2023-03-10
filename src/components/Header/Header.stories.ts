import { Meta, StoryObj } from '@storybook/vue3'
import PlaceholderBlock from '../helpers/PlaceholderBlock/PlaceholderBlock.vue'
import Header from './Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    brandName: {
      control: 'text',
    },
  },
  args: {
    brandName: 'Vue Masterclass',
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: (args) => ({
    components: {
      Header,
      PlaceholderBlock,
    },
    setup() {
      return { args }
    },
    template: `
			<Header v-bind="args">
				<template #right><PlaceholderBlock variant="A"></template>
			</Header>
		`,
  }),
}
