import { Meta, StoryObj } from '@storybook/vue3'
import Tip from './Tip.vue'

const meta: Meta<typeof Tip> = {
	title: 'Components/Tip',
	component: Tip,
	render: (args) => ({
		components: {
			Tip,
		},
		setup() {
			return { args }
		},
		template: `
			<Tip v-bind="args">
				<p><b>Tip:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum dictum mattis. Quisque imperdiet bibendum ante, vitae posuere tellus facilisis non.</p>
			</Tip>
		`,
	}),
	argTypes: {
		variant: {
			options: ['default', 'success'],
		},
	},
	args: {
		variant: 'default',
	},
}
export default meta

type Story = StoryObj<typeof Tip>

export const Default: Story = {}

export const Success: Story = {
	args: {
		variant: 'success',
	},
}
