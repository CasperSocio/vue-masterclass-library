import { Meta, StoryObj } from '@storybook/vue3'
import { iconNames } from './Icon.utils'
import Icon from './Icon.vue'

/**
 * Icons can be used to represent common actions.
 */
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    size: {
      control: 'number',
    },
  },
  args: {
    name: 'hamburger',
    size: 24,
  },
}
export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {}

export const Library: Story = {
  decorators: [
    () => ({
      setup() {
        const containerStyle = {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.5rem',
        }
        const cardStyle = {
          alignItems: 'center',
          border: '1px solid slategray',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1rem .5rem',
          textAlign: 'center',
          width: '8rem',
        }

        return {
          iconNames,
          cardStyle,
          containerStyle,
        }
      },
      template: `
			<div :style="containerStyle">
				<div
					v-for="name in iconNames"
					:style="cardStyle">
					<story :name="name" />
					<p>{{ name }}</p>
				</div>
			</div>
		`,
    }),
  ],
}
