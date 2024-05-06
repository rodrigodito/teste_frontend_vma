import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'defaultId',
    onCheckedChange: () => {}
  }
}

export const CheckboxError: Story = {
  args: {
    id: 'checkboxError',
    onCheckedChange: () => {},
    hasError: true
  }
}
