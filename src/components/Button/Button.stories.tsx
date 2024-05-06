import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { filled: true, onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary',
    children: 'Test label'
  }
}

export const Primary: Story = {
  args: {
    color: 'primary',
    filled: false,
    fontWeight: 'semibold',
    children: 'Test label'
  }
}

export const PrimaryFilled: Story = {
  args: {
    color: 'primary',
    filled: true,
    fontWeight: 'semibold',
    children: 'Test label'
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    filled: false,
    children: 'Test label'
  }
}

export const SecondaryFilled: Story = {
  args: {
    color: 'secondary',
    filled: true,
    children: 'Test label'
  }
}
