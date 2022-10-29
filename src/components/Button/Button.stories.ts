import { Meta, StoryFn } from '@storybook/vue3'
import Button, { ButtonProps } from './Button.vue'

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
		size: {
			defaultValue: 'medium',
			options: ['small', 'medium', 'large'],
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
} as Meta<ButtonProps>

const Template: StoryFn<ButtonProps> = (args) => ({
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

export const Small = Template.bind({})
Small.args = {
	size: 'small',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
}
