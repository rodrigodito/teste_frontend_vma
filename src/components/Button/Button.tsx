import { twMerge } from 'tailwind-merge'

import { button } from './Button.styles'
import { ButtonProps } from './Button.types'

export function Button({
  color,
  filled = false,
  full = false,
  className,
  icon,
  fontWeight = 'normal',
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        button({ color, full, filled, fontWeight }),
        className
      )}
      {...props}
    >
      {icon}
      {props.children}
    </button>
  )
}
