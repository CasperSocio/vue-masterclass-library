import { Meta, StoryFn } from '@storybook/vue3'
import {
	LoggedIn as HeaderLoggedIn,
	LoggedOut as HeaderLoggedOut,
} from './Header.stories'
import Page from './Page.vue'

export default {
	title: 'Example/Page',
	component: Page,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta<typeof Page>

const Template: StoryFn<typeof Page> = () => ({
	components: { Page },

	template: '<Page />',
})

export const LoggedOut = Template.bind({})
LoggedOut.play = HeaderLoggedOut.play

export const LoggedIn = Template.bind({})
LoggedIn.play = HeaderLoggedIn.play
