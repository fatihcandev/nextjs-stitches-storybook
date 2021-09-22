import Button from 'components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
}

const PrimaryTemplate = args => (
  <Button type="primary" {...args}>
    Primary
  </Button>
)

const SecondaryTemplate = args => (
  <Button type="secondary" {...args}>
    Secondary
  </Button>
)

export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  size: 'xs',
}

export const Secondary = SecondaryTemplate.bind({})
Secondary.args = {
  size: 'xs',
}
