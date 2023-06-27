import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="h-full ">
      <div className="px-8 my-12 flex flex-col justify-between md:flex-row lg:mx-36">
        <div className=" md:w-[40%] lg:w-[20%]">
          <img className="w-[100px]" src="/logoonly.png" alt="" />
          <p className="pt-6 font-[20px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            earum architecto ex unde
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start  md:gap-8 lg:gap-14">
          <div className="flex flex-col">
            <h3 className="text-[26px] font-medium py-2">Support</h3>
            <div className="flex flex-col ">
              <Link className="text-[20px] leading-10" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                Terms of Service
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                Support
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[26px] font-medium py-2">Company</h3>
            <div className="flex flex-col">
              <Link className="text-[20px] leading-10" href="/">
                About Us
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                Contact
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                Corner Floor lamps
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                LED Light{' '}
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[26px] font-medium py-2">Contact</h3>
            <div className="flex flex-col">
              <Link className="text-[20px] leading-10" href="/">
                Facebook
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                Twitter
              </Link>
              <Link
                className="text-[20px] leading-10"
                href="/www.instagram.com"
              >
                Instagram
              </Link>
              <Link className="text-[20px] leading-10" href="/">
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-7 bg-zinc-200 mt-6">
        <p className="text-[#000]">
          @2023
          <a className="text-amber-400" href="/">
            ColorQ
          </a>
          All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
