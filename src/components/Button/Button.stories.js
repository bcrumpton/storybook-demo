import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  compoenent: Button,
  argTypes: {
    variant: { control: 'text' },
    children: { control: 'text' },
    onClick: { actions: 'click' },
  },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  variant: 'primary',
  children: 'Primary'
}

export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>


export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args'
}