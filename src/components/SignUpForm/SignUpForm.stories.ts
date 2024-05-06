import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './'

const meta = {
  title: 'Components/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
