import { Meta, StoryObj } from '@storybook/vue3'
import { iconNames } from './Icon.utils'
import Icon from './Icon.vue'

/**
 * Icons can be used to represent common actions.
 */
const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		name: {
			control: 'select',
			options: iconNames,
		},
		size: {
			control: 'number',
		},
	},
	args: {
		name: 'hamburger',
		size: 24,
	},
}
export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {}
