import { Meta, StoryFn } from '@storybook/vue3'
import Card from './Card.vue'
import Button from '../Button/Button.vue'

export default{
	title: 'Components/Card',
	component: Card,
	parameters: {
		docs: {
			description: {
				component: 'Cards contain content and actions that relate information about a subject.',
			},
		},
	},
	argTypes: {
		// Props
		subtitle: {
			control: 'text',
			defaultValue: '',
		},
		title: {
			control: 'text',
			defaultValue: 'Card title',
		},
		// Slots
		footer: {
			control: 'boolean',
			defaultValue: false,
		},
	},
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = (args) => ({
	components: { Button, Card },
	setup() {
		return { args }
	},
	template: `
		<Card v-bind="args">
			<p>I am the card content.</p>
			<Button size="small">Click me</Button>

			<template #footer v-if="args.footer">
				<p>Footer content</p>
				<p>1.11.2022</p>
			</template>
		</Card>
	`,
})

export const Default = Template.bind({})

export const Subtitle = Template.bind({})
Subtitle.args = {
	subtitle: 'Can you dig it?',
}
Subtitle.parameters = {
	docs: {
		description: {
			story: 'Subheads are smaller text elements, such as an article byline or a tagged location.',
		},
	},
}

export const Footer = Template.bind({})
Footer.args = {
	footer: true,
}
Footer.parameters = {
	docs: {
		description: {
			story: 'Use the footer to provide metadata like "Last updated".',
		},
	},
}
