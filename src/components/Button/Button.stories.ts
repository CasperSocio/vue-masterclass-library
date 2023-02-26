import { Meta, StoryObj } from '@storybook/vue3'
import { iconNames } from '../Icon/Icon.utils'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	render: (args) => ({
		components: {
			Button,
		},
		setup() {
			return { args }
		},
		template: `
			<Button v-bind="args">Click me</Button>
		`,
	}),
	argTypes: {
		icon: {
			control: 'select',
			options: iconNames,
		},
		iconPosition: {
			options: ['left', 'right'],
		},
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
		iconPosition: 'left',
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

/**
 * Add an icon to the button for improved UX.
 */
export const WithIcon: Story = {
	args: {
		icon: 'arrow-right',
		iconPosition: 'right',
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
