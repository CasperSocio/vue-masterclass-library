import { Meta, StoryObj } from '@storybook/vue3'
import Card from './Card.vue'

/**
 * Cards contain content and actions that relate information about a subject.
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    // Props
    subtitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
  args: {
    title: 'Card title',
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => ({
    components: {
      Card,
    },
    setup() {
      return { args }
    },
    template: `
			<Card v-bind="args">
				<p>This is a card component.</p>
			</Card>
		`,
  }),
}

/**
 * Subheads are smaller text elements, such as an article byline or a tagged location.
 */
export const Subtitle: Story = {
  ...Default,
  args: {
    subtitle: 'Can you dig it?',
  },
}

/**
 * Use the footer to provide metadata like "Last updated".
 */
export const Footer: Story = {
  render: (args) => ({
    components: {
      Card,
    },
    setup() {
      const date = new Date().toLocaleDateString()
      return { args, date }
    },
    template: `
			<Card v-bind="args">
				<p>This is a card component.</p>
				<template #footer>
					<p>Hello</p>
					<p>{{ date }}</p>
				</template>
			</Card>
		`,
  }),
}
