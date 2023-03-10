import { Meta, StoryObj } from '@storybook/vue3'
import Menu from './Menu.vue'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  args: {
    actions: [
      {
        label: 'Item 1',
        fn() {
          alert('Clicked item 1')
        },
      },
      {
        label: 'Item 2',
        fn() {
          alert('Clicked item 2')
        },
      },
      {
        label: 'Item 3',
        fn() {
          alert('Clicked item 3')
        },
      },
    ],
  },
}
export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {}
