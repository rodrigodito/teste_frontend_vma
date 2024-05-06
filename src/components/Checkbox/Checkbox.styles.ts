import { tv } from 'tailwind-variants'

export const checkbox = tv({
  base: 'flex size-6 min-w-6 items-center justify-center rounded border border-vma-sonicSilver shadow-md aria-checked:border-transparent aria-checked:bg-vma-lightYellow',
  variants: {
    hasError: {
      true: 'border-vma-warning'
    }
  }
})
