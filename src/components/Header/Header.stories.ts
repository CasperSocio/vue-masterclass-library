import { Meta, StoryFn } from '@storybook/vue3'
import Header from './Header.vue'

export default {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta<typeof Header>

const Template: StoryFn<typeof Header> = (args) => ({
	components: { Header },
	setup() {
		return { ...args }
	},
	template: '<Header />',
})

export const Default = Template.bind({})
