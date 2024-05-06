import type { Meta, StoryObj } from '@storybook/react'

import { FormFooter } from './'

const meta = {
  title: 'Components/SignUpForm/FormFooter',
  component: FormFooter,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FormFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
