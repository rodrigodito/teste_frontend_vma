import { tv } from 'tailwind-variants'

export const input = tv({
  base: 'w-full rounded-[50px] border border-vma-sonicSilver px-5 py-[17px] text-lg placeholder:font-light',
  variants: {
    hasError: {
      true: 'border-vma-warning'
    }
  }
})

export const labelStyles = tv({
  base: 'absolute -top-2 left-4 rounded-lg bg-white p-1 text-sm font-semibold',
  variants: {
    hasError: {
      true: 'text-vma-warning'
    }
  }
})
