import { Meta, StoryObj } from '@storybook/vue3'
import PlaceholderBlock from '../helpers/PlaceholderBlock/PlaceholderBlock.vue'
import Header from './Header.vue'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    brandName: {
      control: 'text',
    },
  },
  args: {
    brandName: 'Vue Masterclass',
  },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Header, PlaceholderBlock },
    template: `
      <Header>
        <template #right>
          <PlaceholderBlock variant="A" />
        </template>
      </Header>
    `,
  }),
}
