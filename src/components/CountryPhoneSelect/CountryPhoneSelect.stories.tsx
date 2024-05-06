import type { Meta, StoryObj } from '@storybook/react'

import { CountryPhoneSelect } from './'
import { countries } from './CountryPhoneSelect.const'

const defaultValue = countries[2]

const meta = {
  title: 'Components/CountryPhoneSelect',
  component: CountryPhoneSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    value: { description: 'An object with a default value selected' },
    setValue: {
      description:
        'A function that used on change select, this function receive a object with a country selected'
    }
  },
  args: { countries: countries, value: defaultValue, setValue: () => {} }
} satisfies Meta<typeof CountryPhoneSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
