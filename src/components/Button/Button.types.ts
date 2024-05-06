import React from 'react'

export type ButtonProps = {
  className?: string
  color: 'primary' | 'secondary'
  filled?: boolean
  fontWeight?: 'normal' | 'semibold'
  full?: boolean
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
