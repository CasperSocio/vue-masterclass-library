import { userEvent, within } from '@storybook/testing-library'
import { Meta, StoryFn } from '@storybook/vue3'
import { useAuthStore } from '../stores/auth-store'
import Page from './Page.vue'

export default {
	title: 'Examples/Page',
	component: Page,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta<typeof Page>

const auth = useAuthStore()

const Template: StoryFn<typeof Page> = () => ({
	components: { Page },

	template: '<Page />',
})

export const LoggedOut = Template.bind({})
LoggedOut.play = () => {
	if (auth.user) {
		auth.logout()
	}
}

export const LoggedIn = Template.bind({})
LoggedIn.play = async ({ canvasElement }) => {
	if (!auth.user) {
		const canvas = within(canvasElement)
		const loginButton = await canvas.getByRole('button', {
			name: /Log in/i,
		})
		await userEvent.click(loginButton)
	}
}
