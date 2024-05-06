import Image from 'next/image'

import iconLock from '@/assets/icons/lock.svg'

export function FormFooter() {
  return (
    <div className="flex flex-col gap-5 border-t border-vma-borderGrey px-6 py-5 lg:flex-row lg:border-none lg:px-[89px] lg:pt-14">
      <button className="flex w-full items-center justify-center gap-2 rounded-[50px] bg-vma-lightYellow px-8 py-3 font-semibold lg:w-auto lg:px-9 lg:py-[30px]">
        <Image src={iconLock} width={10} height={9} alt="lock icon" />
        Save
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-[50px] border border-vma-darkGrey px-8 py-3 lg:w-auto lg:px-9 lg:py-[30px]"
      >
        Got a VerifyMyAge account? Sign in
      </button>
    </div>
  )
}
