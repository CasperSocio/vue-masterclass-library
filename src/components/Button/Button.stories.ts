import { Meta, StoryObj } from '@storybook/vue3'
import { iconNames } from '../Icon/Icon.utils'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  render: (args) => ({
    components: {
      Button,
    },
    setup() {
      return { args }
    },
    template: `
			<Button v-bind="args">{{ args.default }}</Button>
		`,
  }),
  argTypes: {
    // @ts-expect-error – missing type support
    default: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: iconNames,
    },
    iconPosition: {
      options: ['left', 'right'],
    },
    shape: {
      control: 'select',
      options: ['pill', 'square'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['button', 'reset', 'submit'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    // @ts-expect-error – missing type support
    default: 'Click me',
    iconPosition: 'left',
    shape: 'pill',
    size: 'medium',
    type: 'button',
    variant: 'secondary',
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

/**
 * Add an icon to the button for improved UX.
 */
export const WithIcon: Story = {
  args: {
    // @ts-expect-error – missing type support
    default: 'Read more',
    icon: 'arrow-right',
    iconPosition: 'right',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Shape: Story = {
  decorators: [
    () => ({
      template: `
			<div style="align-items: center; display: flex; gap: 1rem;">
				<story shape="pill" />
				<story shape="square" />
			</div>
		`,
    }),
  ],
}

export const Size: Story = {
  decorators: [
    () => ({
      template: `
			<div style="align-items: center; display: flex; gap: 1rem;">
				<story size="small" />
				<story size="medium" />
				<story size="large" />
			</div>
		`,
    }),
  ],
}
