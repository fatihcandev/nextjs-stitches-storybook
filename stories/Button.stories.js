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

const Template = args => <Button {...args}>Button Text</Button>

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  size: 'xs',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  size: 'xs',
}
