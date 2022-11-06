import { Meta, StoryFn } from '@storybook/vue3'
import Loader from './Loader.vue'

export default {
	title: 'Components/Loader',
	component: Loader,
	argTypes:{
		contentHeight: {
			control: 'number',
			defaultValue: 24,
		},
		height: {
			control: 'number',
			defaultValue: 56,
		},
		shape: {
			defaultValue: 'soft',
			options: ['pill', 'soft', 'square'],
		},
		state: {
			defaultValue: 'loading',
			options: ['loading', 'error', 'idle'],
		},
		width: {
			control: 'number',
			defaultValue: 35,
		},
	},
} as Meta<typeof Loader>

const Template: StoryFn<typeof Loader> = (args) => ({
	components: { Loader },
	setup() {
		return { args }
	},
	template: `
		<Loader
			v-bind="args"
			:content-height="51.2"
			:height="56.32 + (34.304 * 2)">
			<h1>Hello world!</h1>
		</Loader>
		<Loader
			v-bind="args"
			:content-height="24"
			:height="56"
			:width="80">
			<p>Lorem ipsum</p>
		</Loader>
	`,
})

export const Default = Template.bind({})
