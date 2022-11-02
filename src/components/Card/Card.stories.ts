import { Meta, StoryFn } from '@storybook/vue3'
import Card from './Card.vue'
import Button from '../Button/Button.vue'

export default{
	title: 'Components/Card',
	component: Card,
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

export const Footer = Template.bind({})
