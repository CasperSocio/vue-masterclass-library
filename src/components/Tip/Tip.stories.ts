import { Meta, StoryFn } from '@storybook/vue3'
import Tip from './Tip.vue'

export default{
	title: 'Components/Tip',
	component: Tip,
	argTypes: {
		default: {
			control: 'text',
			defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum dictum mattis. Quisque imperdiet bibendum ante, vitae posuere tellus facilisis non.',
		},
		variant: {
			options: ['default', 'success'],
		},
	},
} as Meta<typeof Tip>

const Template: StoryFn<typeof Tip> = (args) => ({
	components: { Tip },
	setup() {
		return { args }
	},
	template: '<Tip v-bind="args"><p><b>Tip:</b> {{ args.default }}</p></Tip>',
})

export const Default = Template.bind({})
Default.args = {
	variant: 'default',
}

export const Success = Template.bind({})
Success.args = {
	variant: 'success',
}
