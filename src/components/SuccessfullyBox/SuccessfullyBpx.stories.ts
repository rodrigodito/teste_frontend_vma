import type { Meta, StoryObj } from '@storybook/react'

import { SuccessfullyBox } from './'

const meta = {
  title: 'Components/SuccessfullyBox',
  component: SuccessfullyBox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SuccessfullyBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
