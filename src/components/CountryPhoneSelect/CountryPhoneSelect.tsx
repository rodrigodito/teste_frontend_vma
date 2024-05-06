'use client'
import Image from 'next/image'
import { useState } from 'react'

import * as Select from '@radix-ui/react-select'
import { twMerge } from 'tailwind-merge'

import { CountryPhoneSelectProps } from './CountryPhoneSelect.types'

import iconFilledArrowDown from '@/assets/icons/filledArrowDown.svg'

export function CountryPhoneSelect({
  className,
  countries,
  value,
  setValue
}: CountryPhoneSelectProps) {
  function handleValueChange(code: string) {
    const countrySelected = countries.find((item) => item.code === code)
    if (countrySelected) setValue(countrySelected)
  }

  return (
    <Select.Root value={value?.name} onValueChange={handleValueChange}>
      <Select.Trigger className={twMerge('flex items-center', className)}>
        <Select.Value aria-label={value?.code} asChild>
          <div className="mr-1 flex items-center gap-1 text-lg">
            <figure className="size-5 overflow-hidden rounded-full">
              <Image
                src={value?.image || ''}
                width={40}
                height={28}
                alt={`${value?.name} flag`}
                className="size-full object-cover"
              />
            </figure>
            {value?.code}
          </div>
        </Select.Value>
        <Select.Icon>
          <Image
            src={iconFilledArrowDown}
            width={8}
            height={5}
            alt="filled arrow down icon"
          />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport className="top-8 min-w-28 rounded-md bg-white shadow-3xl">
            {countries.map((country) => (
              <Select.Item value={country.code} key={country.code}>
                <Select.ItemText asChild>
                  <div className="flex gap-2 px-3 py-2">
                    <figure className="size-5 overflow-hidden rounded-full">
                      <Image
                        src={country.image}
                        width={20}
                        height={14}
                        alt={`${country.name} flag`}
                        className="size-full object-cover"
                      />
                    </figure>
                    {country.code}
                  </div>
                </Select.ItemText>
                <Select.ItemIndicator>…</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
