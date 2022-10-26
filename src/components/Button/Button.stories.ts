import { Meta, StoryFn } from '@storybook/vue3'
import Button from './Button.vue'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		default: {
			control: 'text',
			defaultValue: 'Click me',
		},
		shape: {
			defaultValue: 'pill',
			options: ['pill', 'square'],
		},
		type: {
			defaultValue: 'button',
			options: ['button', 'reset', 'submit'],
		},
		variant: {
			defaultValue: 'secondary',
			options: ['primary', 'secondary'],
		},
		onClick: {},
	},
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => ({
	components: { Button },
	setup() {
		return { args }
	},
	template: '<Button v-bind="args">{{ args.default }}</Button>',
})

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
}
