'use client'
import { use, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'
import { SignUpFormSchema } from '@/schemas/SignUpForm'
import { yupResolver } from '@hookform/resolvers/yup'

import { CountryPhoneSelect } from '../CountryPhoneSelect'
import { countries } from '../CountryPhoneSelect/CountryPhoneSelect.const'
import { CountryAreaDataSelect } from '../CountryPhoneSelect/CountryPhoneSelect.types'
import { SecuredBy } from '../SecuredBy'
import { FormFooter } from './FormFooter'
import { PolicyTerms } from './PolicyTerms'
import { SignUpFormData } from './SignUpForm.types'

export function SignUpForm() {
  const defaultCountryAreaSelect = countries.find(
    (country) => country.code === '+44'
  )
  const [countryAreaNumber, setCountryAreaNumber] =
    useState<CountryAreaDataSelect>(defaultCountryAreaSelect!)
  const [isPolicyTermChecked, setIsPolicyTermChecked] = useState(false)

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpFormSchema)
  })

  function handlePolicyCheck(checked: boolean) {
    if (checked && !!errors.policyTerms?.message) {
      clearErrors('policyTerms')
    }
    setIsPolicyTermChecked(checked)
  }

  function onSubmit(data: SignUpFormData) {
    if (!isPolicyTermChecked) {
      setError('policyTerms', { message: 'policyTerms is a required field' })
      return
    }

    console.log('data', data)
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 px-6 lg:max-w-[680px] lg:px-[89px]">
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                label="Full Name"
                hasError={!!errors.fullName?.message}
                placeholder="Please type in..."
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                hasError={!!errors.email?.message}
                placeholder="Please type in..."
                {...field}
              />
            )}
          />

          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <Input
                label="Mobile"
                hasError={!!errors.mobile?.message}
                className="pl-[92px]"
                {...field}
              >
                <CountryPhoneSelect
                  className="absolute left-5 top-1/2 -translate-y-1/2"
                  value={countryAreaNumber}
                  setValue={setCountryAreaNumber}
                  countries={countries}
                />
              </Input>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                label="Password"
                type="password"
                hasError={!!errors.password?.message}
                placeholder="Please type in..."
                {...field}
              />
            )}
          />

          <PolicyTerms
            handlePolicyCheck={handlePolicyCheck}
            hasError={!!errors.policyTerms?.message}
          />
          <SecuredBy />
        </div>

        <FormFooter />
      </form>
    </>
  )
}
