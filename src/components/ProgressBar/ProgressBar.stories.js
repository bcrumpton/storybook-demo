import React from 'react'
import ProgressBar from './ProgressBar'

export default {
  title: 'Progress Bar',
  component: ProgressBar,
  argTypes: {
    width: { control: 'text' }
  },
}

const Template = args => <ProgressBar {...args} />

export const Default = Template.bind({})

Default.args = {
  width: '62%'
}