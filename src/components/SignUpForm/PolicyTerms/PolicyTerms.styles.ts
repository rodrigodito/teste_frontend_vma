import { tv } from 'tailwind-variants'

export const policyLabel = tv({
  base: 'inline-block text-sm',
  variants: {
    hasError: {
      true: 'text-vma-warning'
    }
  }
})
