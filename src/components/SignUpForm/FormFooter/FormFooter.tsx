import Image from 'next/image'

import { Button } from '@/components/Button'

import iconLock from '@/assets/icons/lock.svg'

export function FormFooter() {
  return (
    <div className="flex flex-col gap-5 border-t border-vma-borderGrey px-6 py-5 lg:flex-row lg:border-none lg:px-[89px] lg:pt-14">
      <Button
        color="primary"
        filled
        fontWeight="semibold"
        icon={<Image src={iconLock} width={10} height={9} alt="lock icon" />}
        className="max-md:w-full"
      >
        Save
      </Button>

      <Button color="secondary" type="button" className="max-md:w-full">
        Got a VerifyMyAge account? Sign in
      </Button>
    </div>
  )
}
