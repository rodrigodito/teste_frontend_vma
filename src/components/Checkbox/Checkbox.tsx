import Image from 'next/image'

import * as CheckboxComponent from '@radix-ui/react-checkbox'

import { checkbox } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

import check from '@/assets/icons/check.svg'

export function Checkbox({ id, onCheckedChange, hasError }: CheckboxProps) {
  return (
    <CheckboxComponent.Root
      id={id}
      className={checkbox({ hasError })}
      onCheckedChange={onCheckedChange}
    >
      <CheckboxComponent.Indicator>
        <Image src={check} width={10} height={10} alt="check icon" />
      </CheckboxComponent.Indicator>
    </CheckboxComponent.Root>
  )
}
