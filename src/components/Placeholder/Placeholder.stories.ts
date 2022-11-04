import { Meta, StoryFn } from '@storybook/vue3'
import Placeholder from './Placeholder.vue'

export default {
	title: 'Components/Placeholder',
	component: Placeholder,
	argTypes: {
		color: {
			control: 'color',
		},
		height: {
			control: 'number',
			defaultValue: 24,
		},
		shape: {
			options: ['pill', 'soft', 'square'],
		},
		width: {
			control: {
				type: 'range',
				min: 10,
				max: 100,
				step: 5,
			},
			defaultValue: 60,
		},
	},
} as Meta<typeof Placeholder>

const Template: StoryFn<typeof Placeholder> = (args) => ({
	components: { Placeholder },
	setup() {
		return { args }
	},
	template: '<Placeholder v-bind="args" />',
})

export const Pill = Template.bind({})
Pill.args = {
	shape: 'pill',
}

export const Soft = Template.bind({})
Soft.args = {
	shape: 'soft',
}

export const Square = Template.bind({})
Square.args = {
	shape: 'square',
}
