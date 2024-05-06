'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { twMerge } from 'tailwind-merge'

import { input, labelStyles } from './Input.styles'
import { InputProps } from './Input.types'

import iconHidePassword from '@/assets/icons/hidePassword.svg'
import iconShowPassword from '@/assets/icons/showPassword.svg'

export function Input({
  label,
  hasError,
  id,
  type = 'text',
  children,
  className,
  ...props
}: InputProps) {
  const [hasTogglePasswordButton] = useState(type === 'password')
  const [temporaryType, setTemporaryType] = useState(type)
  const [toggleShowPasswordIcon, setToggleShowPasswordIcon] =
    useState(iconShowPassword)

  function handleShowPassword() {
    if (temporaryType === 'text') {
      setTemporaryType('password')
      setToggleShowPasswordIcon(iconShowPassword)
    } else {
      setTemporaryType('text')
      setToggleShowPasswordIcon(iconHidePassword)
    }
  }

  return (
    <div className="relative">
      <label htmlFor={id} className={labelStyles({ hasError })}>
        {label}
      </label>

      {children}

      <input
        id={id}
        type={temporaryType}
        className={twMerge(input({ hasError }), className)}
        {...props}
      />
      {hasTogglePasswordButton && (
        <button
          type="button"
          onClick={handleShowPassword}
          className="absolute right-5 top-1/2 -translate-y-1/2"
        >
          <Image
            width={22}
            height={15}
            src={toggleShowPasswordIcon}
            alt="show password"
          />
        </button>
      )}
    </div>
  )
}
