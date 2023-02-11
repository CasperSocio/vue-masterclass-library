import { userEvent, within } from '@storybook/testing-library'
import { Meta, StoryObj } from '@storybook/vue3'
import { useAuthStore } from '../stores/auth-store'
import Page from './Page.vue'

const meta: Meta<typeof Page> = {
	title: 'Examples/Page',
	component: Page,
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta

const auth = useAuthStore()

type Story = StoryObj<typeof Page>

export const LoggedOut: Story = {
	play: () => {
		if (auth.user) {
			auth.logout()
		}
	},
}

export const LoggedIn: Story = {
	play: async ({ canvasElement }) => {
		if (!auth.user) {
			const canvas = within(canvasElement)
			const loginButton = await canvas.getByRole('button', {
				name: /Log in/i,
			})
			await userEvent.click(loginButton)
		}
	},
}
