// import Image from 'next/image'
import React from 'react'
import IMGS from '../../../public'
import Link from 'next/link'

const CardInfo = [
  {
    imgUrl: '/L004.jpg',
    title: 'Casual and Nature',
    info: 'CasualNature,Alam and Modern',
    link: '/more',
  },
  {
    imgUrl: '/L002.jpg',
    title: 'Dark Bedroom',
    info: 'Elegant, Cool Nature and Dark',
    link: '/more',
  },
  {
    imgUrl: '/L003.jpg',
    title: 'Elegant Bedroom',
    info: 'CModren, Keren, Simple and Clean',
    link: '/more',
  },
  {
    imgUrl: '/L001.jpg',
    title: 'Simple Office room',
    info: 'CMinimalist Clean and Modern',
    link: '/more',
  },
]

const inspiData = [
  {
    img: '/sofa.svg',
    text: 'Livingroom Design',
  },
  {
    img: '/bedroom.svg',
    text: 'Bedroom Design',
  },
  {
    img: '/chair3.svg',
    text: 'Office Room Design',
  },
]

const Inspirations = () => {
  return (
    <div className="px-7 my-14">
      <div className="">
        <div className="lg:flex flex-col justify-center items-center">
          <p className="text-[18px] font-semibold text-[#1F1249]">
            Inspirations
          </p>
          <h3 className="text-[2rem] font-bold text-[#1F1249] leading-8 pt-4">
            Inspirations Room.
          </h3>
          <p className="pt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            voluptates kjebf aosh
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 md:justify-center  text-left ">
          {inspiData.map((data) => (
            <div className="flex flex-col justify-center w-full text-center items-center md:flex-row  md:items-left lg:flex-row lg:items-center  lg:gap-8 lg:w-52">
              <img src={data.img} className="mb-2 w-[50px] h-[50px]" />
              <p className=" text-center md:text-left w-32 pl-0 md:pl-4">
                {data.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-8 flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-6">
          {CardInfo.map((data) => (
            <div className="my-2">
              <img
                className="bg-slate-400 w-[320px] h-[350px] lg:w-[450px] lg:h-[470px]"
                src={data.imgUrl}
              />
              <h3 className="text-[20px] md:text-[24px] font-semibold py-2">
                {data.title}
              </h3>
              <p className="text-[16px] md:text-[20px] font-normal">
                {data.info}
              </p>
              <div className="my-2">
                <Link
                  className="text-[#1F1249] underline font-semibold"
                  href={data.link}
                >
                  Discover More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inspirations
