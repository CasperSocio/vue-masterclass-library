import { Meta, StoryObj } from '@storybook/vue3'
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
			options: [
				'checkbox-false',
				'checkbox-true-outline',
				'checkbox-true',
				'hamburger',
			],
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
