import React from 'react'

export type InputProps = {
  children?: React.ReactNode
  className?: string
  hasError?: boolean
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>
