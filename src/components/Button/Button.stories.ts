import { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	render: (args: any) => ({
		components: {
			Button,
		},
		template: `
			<Button v-bind="args">Click me</Button>
		`,
	}),
	argTypes: {
		shape: {
			control: 'select',
			options: ['pill', 'square'],
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		type: {
			control: 'select',
			options: ['button', 'reset', 'submit'],
		},
		variant: {
			control: 'select',
			options: ['primary', 'secondary'],
		},
		onClick: {
			action: 'clicked',
		},
	},
	args: {
		shape: 'pill',
		size: 'medium',
		type: 'button',
		variant: 'secondary',
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
}

export const Small: Story = {
	args: {
		size: 'small',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
	},
}
