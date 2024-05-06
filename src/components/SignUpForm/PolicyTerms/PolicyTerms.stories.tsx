import type { Meta, StoryObj } from '@storybook/react'

import { PolicyTerms } from './'

const meta = {
  title: 'Components/SignUpForm/PolicyTerms',
  component: PolicyTerms,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    handlePolicyCheck: () => {},
    hasError: false
  }
} satisfies Meta<typeof PolicyTerms>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    hasError: true
  }
}
