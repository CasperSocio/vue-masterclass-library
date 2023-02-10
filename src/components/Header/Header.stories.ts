import { Meta, StoryObj } from '@storybook/vue3'
import Header from './Header.vue'

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
	render: (args) => ({
		components: {
			Header,
		},
		setup() {
			return { args }
		},
		template: `
			<Header v-bind="args">
				<template #right><p>right</p></template>
			</Header>
		`,
	}),
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

export const Default: Story = {}
