import Image from 'next/image'
import Link from 'next/link'

import { SecuredBy } from '@/components/SecuredBy'

import logo from '@/assets/icons/logo.svg'
import iconSuccessfully from '@/assets/icons/successfully.svg'

export default function SuccessPage() {
  return (
    <>
      <header className="m-5 mb-14 lg:my-12 lg:ml-[89px]">
        <Link href="/">
          <Image src={logo} width={135} height={25} alt="Verify my age" />
        </Link>
      </header>

      <div className="mb-[60px] hidden lg:ml-[89px] lg:flex lg:flex-col">
        <h1 className="mb-5 text-3xl/[46px] font-semibold">Congrats</h1>
        <p className="max-w-[430px] text-xl/5">
          {`You'll`} be automatically verified for all future orders.Your orders
          will be dispatched without delay.
        </p>
      </div>

      <div className="mx-6 rounded-[20px] shadow-infoBox lg:ml-[89px] lg:max-w-[383px] lg:shadow-none">
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-vma-lightYellow py-10 shadow-3xl lg:flex-row lg:gap-7 lg:py-20">
          <Image
            src={iconSuccessfully}
            width={50}
            height={50}
            alt="Successfully"
            className="lg:size-[75px]"
          />
          <span className="max-w-40 text-center text-lg font-semibold lg:text-left lg:text-2xl">
            {`You've`} been successfully verified!
          </span>
        </div>
        <p className="px-5 py-10 text-center lg:hidden">
          {`You'll`} be automatically verified for all future orders. Your order
          will be dispatched without delay.
        </p>
      </div>

      <div className="mx-6 mt-5">
        <SecuredBy />
      </div>
    </>
  )
}
