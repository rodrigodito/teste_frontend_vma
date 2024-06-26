'use client'

import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Input } from '@/components/Input'
import { SignUpDto } from '@/domain/dto/save-sign-up-dto'
import { makeSaveSignUpFactory } from '@/factories/save-sign-up-factory'
import { SignUpFormSchema } from '@/schemas/SignUpForm'
import { yupResolver } from '@hookform/resolvers/yup'

import { CountryPhoneSelect } from '../CountryPhoneSelect'
import { countries } from '../CountryPhoneSelect/CountryPhoneSelect.const'
import { CountryAreaDataSelect } from '../CountryPhoneSelect/CountryPhoneSelect.types'
import { SecuredBy } from '../SecuredBy'
import { FormFooter } from './FormFooter'
import { PolicyTerms } from './PolicyTerms'

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
  } = useForm<SignUpDto>({
    resolver: yupResolver(SignUpFormSchema)
  })

  function handlePolicyCheck(checked: boolean) {
    if (checked && !!errors.policyTerms?.message) {
      clearErrors('policyTerms')
    }
    setIsPolicyTermChecked(checked)
  }

  async function onSubmit(data: SignUpDto) {
    if (!isPolicyTermChecked) {
      setError('policyTerms', { message: 'policyTerms is a required field' })
      return
    }

    try {
      await makeSaveSignUpFactory().save(data)

      window.location.href = '/success'
    } catch (error) {
      console.log(error)
    }
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
