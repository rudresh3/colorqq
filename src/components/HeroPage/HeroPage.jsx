import React from 'react'

const HeroPage = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[500px] bg-slate-500 flex justify-center items-center flex-col md:h-[800px] lg:h-[90vh]">
        <h4 className="font-medium text-white text-[1rem] md:text-[1.7rem] lg:text-[1.9rem]">
          We are ColorQ
        </h4>
        <h1 className="font-[800] text-white text-[3rem] md:text-[4rem] md:leading-[3.5rem] leading-[2.8rem] lg:text-[8rem] lg:leading-[6.5rem]">
          LIGHT UP <br /> YOUR LIFE
        </h1>
        <button className="mt-10 bg-[#FFBE18] px-5 py-2 font-semibold lg:w-[225px] lg:h-[67px] lg:text-[20px] lg:mt-16">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default HeroPage
