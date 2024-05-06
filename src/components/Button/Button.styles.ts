import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'flex w-auto items-center justify-center gap-2 rounded-[50px] border px-8 py-3 lg:px-9 lg:py-[30px]',
  variants: {
    color: {
      primary: 'border-vma-lightYellow',
      secondary: 'border-vma-darkGrey bg-white'
    },
    full: {
      true: 'w-full'
    },
    filled: {
      true: 'border-none'
    },
    fontWeight: {
      semibold: 'font-semibold',
      normal: 'font-light'
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      filled: true,
      class: 'bg-vma-lightYellow'
    },
    {
      color: 'secondary',
      filled: true,
      class: 'bg-vma-darkGrey text-white'
    }
  ]
})
