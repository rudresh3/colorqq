import Image from 'next/image'
import React from 'react'

const OrderNow = () => {
  return (
    <div className="px-7 py-12 md:flex md:justify-between items-center lg:px-[10rem] ">
      <div className="flex flex-col md:w-[75%] lg:w-[50%]">
        <div className="">
          <p className="text-[20px] font-medium text-gray-600 lg:text-[24px] lg:font-semibold">
            Keep Productive
          </p>
          <h2 className="text-[#1F1249] text-[2rem] font-bold leading-8 py-2 lg:text-[50px] lg:font-semibold lg:leading-[3.8rem]">
            Make Your Online <br /> Content
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            libero voluptatum sed ex reprehenderit vero natus, cupiditate omnis
            saepe placeat obcaecati facere! Odit numquam recusandae sed veniam
            obcaecati, ducimus officiis.
          </p>
        </div>
        {/* <div className="flex flex-row"> */}
        <div className="flex flex-col gap-5 mt-6 ">
          <div className="lg:flex-row gap-5 flex flex-col lg:mt-2">
            <div className=" flex items-center gap-4">
              <div className="w-20 h-20 bg-black rounded-full"></div>
              <p>
                Speedy <br /> Delivery
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-black rounded-full"></div>
              <p>
                Order 2 product+ <br /> Free Shipment
              </p>
            </div>
          </div>
          <button className="mt-5 lg:mt-4 bg-[#FFBE18] px-2 py-3 font-semibold lg:w-[225px] lg:h-[67px] lg:text-[20px] shadow-2xl">
            Order Now
          </button>
        </div>
        {/* </div> */}
      </div>
      <div className="hidden md:block">
        <Image src="/0001.png" width={600} height={600} />
      </div>
    </div>
  )
}

export default OrderNow
