import React from 'react'
import { LuLampCeiling } from 'react-icons/lu'
import Image from 'next/image'

const Image01 = <LuLampCeiling width={50} height={50} color="red" />
const Image02 = <LuLampCeiling />
const Image03 = <LuLampCeiling />

const ulim = [
  {
    img: '/lamp.svg',
    text: 'Wake up Feeling Good',
  },
  {
    img: '/energy.svg',
    text: 'Fall Asleep Faster',
  },
  {
    img: '/moon.svg',
    text: 'Boost Daytime Energy',
  },
]

const Testimonials = () => {
  return (
    <div className="px-7 bg-gradient-to-b from-indigo-950 to-red-400 py-4 lg:h-screen">
      <div className="py-12 md:flex md:justify-center md:items-center flex-col ">
        <div className="">
          <p className="text-[18px] font-medium pb-4 text-[#fff] md:text-center">
            What Costumer Says?
          </p>
          <h3 className="text-[2rem] font-bold text-[#fff] leading-8 md:text-center">
            Testimonials From Our Customers.
          </h3>
          <p className="font-normal pt-1 text-[#fff]">
            On the other hands, we denounce with righteous indignation and
          </p>
        </div>
        <div className="mt-3 flex flex-col md:flex-row md:justify-center">
          {ulim.map((data) => (
            <div className="flex items-center gap-2 my-4 md:">
              <Image src={data.img} className="" width={50} height={50} />
              <h3 className="w-[9rem] font-normal px-2 text-[#fff]">
                {data.text}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white shadow-2xl p-4 relative lg:w-[44rem] md:h-[14rem]">
          <div className="z-10 md:flex">
            <div className="md:block md:w-[30rem] lg:w-[50rem]">
              <Image className="" src="/R001.png" width={180} height={180} />
            </div>

            <div className="">
              <p>
                I really like this light. I find it far more handy for lighting
                effects than a standard bulb. It's really fantastic. It's simple
                to put up and impresses my visitors, maybe a bit too much.
              </p>
              <div className=" flex justify-between pt-4 lg:mt-10 md:mt-14 p-4">
                <p className="text-[14px] font-semibold">Amogh M</p>
                <p className="text-[14px] font-semibold ">Back End Developer</p>
              </div>
            </div>
          </div>
          {/* <div className="h-full w-[80%] bg-white bottom-4 absolute -z-[10]"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
