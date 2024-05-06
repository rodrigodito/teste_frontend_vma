import Image from 'next/image'
import Link from 'next/link'

import { SecuredBy } from '@/components/SecuredBy'
import { SuccessfullyBox } from '@/components/SuccessfullyBox'

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

      <SuccessfullyBox />

      <div className="mx-6 mt-5">
        <SecuredBy />
      </div>
    </>
  )
}
