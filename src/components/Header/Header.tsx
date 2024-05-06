import Image from 'next/image'

import { Steps } from './Steps'

import iconArrowLeft from '@/assets/icons/arrowLeft.svg'
import logo from '@/assets/icons/logo.svg'

export function Header() {
  return (
    <header className="flex items-start justify-between gap-[10px] p-6 pt-5 lg:relative lg:px-[89px] lg:pb-14 lg:pt-[50px]">
      <div className="flex gap-[10px] lg:flex-col">
        <Image
          src={logo}
          width={135}
          height={25}
          alt="Verify my age"
          className="hidden lg:mb-14 lg:flex"
        />
        <button className="mt-[10px] flex size-6 min-w-6 items-center justify-center rounded-full bg-vma-grey lg:mt-0 lg:size-11">
          <Image
            src={iconArrowLeft}
            width={8}
            height={8}
            alt="Arrow left icon"
            className="size-3 grayscale lg:size-5"
          />
        </button>
        <div className="mt-3 flex flex-col">
          <h1 className="mb-[14px] text-xl font-semibold lg:mb-5 lg:text-3xl">
            Join VerifyMyAge
          </h1>
          <p className="pr-4 text-md font-extralight lg:text-xl">
            {`Let's`} start by setting up your login details.
          </p>
        </div>
      </div>
      <Steps />
    </header>
  )
}
