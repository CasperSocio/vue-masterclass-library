import { useAuthStore } from '@/stores/auth'
import { userEvent, within } from '@storybook/testing-library'
import { Meta, StoryFn } from '@storybook/vue3'
import Header from './Header.vue'

export default {
	title: 'Example/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
} as Meta<typeof Header>

const auth = useAuthStore()

const Template: StoryFn<typeof Header> = (args) => ({
	components: { Header },
	setup() {
		return { ...args }
	},
	template: '<Header />',
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
