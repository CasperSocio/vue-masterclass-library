import { Meta, StoryFn } from '@storybook/vue3'
import Header from './Header.vue'

export default {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		// Props
		brandName: {
			defaultValue: 'Vue Masterclass',
		},
		// Slots
		right: {
			defaultValue: 'Hello',
		},
	},
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = (args) => ({
	components: { Header },
	setup() {
		return { args }
	},
	template: `
		<Header v-bind="args">
			<template #right>
				{{ args.right }}
			</template>
		</Header>
	`,
})

export const Default = Template.bind({})
