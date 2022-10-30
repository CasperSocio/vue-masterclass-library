import { Meta, StoryFn } from '@storybook/vue3'
import Menu from './Menu.vue'

export default {
	title: 'Components/Menu',
	component: Menu,
	argTypes: {
		actions: {
			defaultValue: [{
				label: 'Item 1',
				fn() { alert('Clicked item 1') },
			}, {
				label: 'Item 2',
				fn() { alert('Clicked item 2') },
			}, {
				label: 'Item 3',
				fn() { alert('Clicked item 3') },
			}],
		},
	},
} as Meta<typeof Menu>

const Template: StoryFn<typeof Menu> = (args) => ({
	components: { Menu },
	setup() {
		return { args }
	},
	template: '<Menu v-bind="args" />',
})

export const Default = Template.bind({})
