import { useAuthStore } from '@/stores/auth-store'
import { userEvent, within } from '@storybook/testing-library'
import { Meta, StoryObj } from '@storybook/vue3'
import Page from './Page.vue'

const meta: Meta<typeof Page> = {
  title: 'Examples/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof Page>

export const LoggedOut: Story = {
  play: async ({ canvasElement }) => {
    const auth = useAuthStore()
    if (auth.user) {
      const canvas = within(canvasElement)
      const logoutButton = await canvas.getByRole('button', {
        name: /Log out/i,
      })
      await userEvent.click(logoutButton)
    }
  },
}

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const auth = useAuthStore()
    if (!auth.user) {
      const canvas = within(canvasElement)
      const loginButton = await canvas.getByRole('button', {
        name: /Log in/i,
      })
      await userEvent.click(loginButton)
    }
  },
}
