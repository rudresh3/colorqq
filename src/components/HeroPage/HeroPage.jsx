'use client'
import React from 'react'
import { motion, useInView, useAnimate } from 'framer-motion'

const HeroPage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-950 to-red-400 py-4">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
        className="w-full h-[500px]  flex justify-center items-center flex-col md:h-[800px] lg:h-[90vh]"
      >
        <h4 className="font-medium text-white text-[1rem] md:text-[1.7rem] lg:text-[1.9rem]">
          We are Color Q
        </h4>
        <h1 className="font-[800] text-center text-white text-[3rem] md:text-[4rem] md:leading-[3.5rem] leading-[2.8rem] lg:text-[10rem] lg:leading-[7.5rem]">
          LIGHT UP <br /> YOUR LIFE
        </h1>
        <button className="mt-10 shadow-2xl bg-[#FFBE18] px-5 py-2 font-semibold lg:w-[225px] lg:h-[67px] lg:text-[20px] lg:mt-16">
          Buy Now
        </button>
      </motion.div>
    </div>
  )
}

export default HeroPage
