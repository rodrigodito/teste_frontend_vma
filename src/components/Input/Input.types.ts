import React from 'react'

export type InputProps = {
  children?: JSX.Element
  className?: string
  hasError?: boolean
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>
