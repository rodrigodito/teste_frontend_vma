import type { Meta, StoryObj } from '@storybook/react'

import { SecuredBy } from './'

const meta = {
  title: 'Components/SecuredBy',
  component: SecuredBy,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SecuredBy>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
