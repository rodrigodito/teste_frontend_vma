import Image from 'next/image'

import iconLock from '@/assets/icons/lock.svg'
import logo from '@/assets/icons/logoGrey.svg'

export function SecuredBy() {
  return (
    <div className="flex items-center justify-center gap-[6px] border-t border-vma-darkGrey/15 pb-5 pt-3 text-xs text-vma-mediumGrey lg:hidden">
      <Image
        src={iconLock}
        width={10}
        height={10}
        alt="Lock icon"
        className="opacity-25"
      />
      Secured by
      <Image
        src={logo}
        width={80}
        height={20}
        alt="Verify My Age logo"
        className="grayscale"
      />
    </div>
  )
}
