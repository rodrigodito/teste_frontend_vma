import type { Meta, StoryObj } from '@storybook/react'

import { CountryPhoneSelect } from '../CountryPhoneSelect'
import { countries } from '../CountryPhoneSelect/CountryPhoneSelect.const'
import { Input } from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { label: 'Full Name', placeholder: 'Please type in...' }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InputError: Story = {
  args: {
    hasError: true
  }
}

export const MobilePhone: Story = {
  args: {
    className: 'pl-[92px]',
    children: (
      <CountryPhoneSelect
        countries={countries}
        value={countries[2]}
        setValue={() => {}}
        className="absolute left-5 top-1/2 -translate-y-1/2"
      />
    )
  }
}
