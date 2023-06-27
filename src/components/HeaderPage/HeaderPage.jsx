import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeaderPage = () => {
  return (
    <div>
      {/* Mobile */}
      <div className="flex justify-between items-center bg-white shadow-lg h-12 px-8 lg:hidden">
        <Link href="/">Lamps</Link>
        <Link href="/">
          <Image src="/logoonly.png" width={50} height={50} />
        </Link>

        <Link href="/">Store</Link>
      </div>
      {/* Ipad */}
      <div className="justify-between items-center bg-white h-24  hidden lg:flex shadow-lg">
        <Link className="text-[18px] font-[600] px-10" href="/">
          Lamps
        </Link>
        <Image src="/logoonly.png" width={70} height={70} />
        <div className="flex justify-around items-center h-24">
          <Link className="mr-5 text-[18px] font-[600]" href="/">
            Home
          </Link>
          <Link className="mr-5 text-[18px] font-[600]" href="/">
            About
          </Link>
          <Link className=" text-[18px] font-[600]" href="/">
            Contact
          </Link>
          <Link
            className="ml-10 px-10 py-9 text-center bg-[#1F1249] text-[18px] font-[600] text-[#fff] "
            href="/"
          >
            Store
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage
