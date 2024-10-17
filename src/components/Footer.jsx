import React from 'react'
import logo from "../assets/asset 1.svg";
import sep from "../assets/asset 2.svg";
import ig from "../assets/asset 13.svg"
import ml from "../assets/asset 14.svg"
import lin from "../assets/asset 15.svg"
import x from "../assets/asset 17.svg"
import yt from "../assets/asset 18.svg"
import fb from "../assets/asset 19.svg"

const Footer = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center pb-20'>
        <img className='mt-5 w-[5000px] h-1 sm:mt-24 md:mt-40' src={sep} alt="" />
        <div className='grid grid-flow-row grid-cols-2 place-content-center md:flex md:flex-row items-center justify-center w-full lg:px-20'>
            <img className='object-cover rounded-full h-60 w-60 hover:scale-125 relative transition duration-500' src={ig} alt="" />
            <img className='object-cover rounded-full h-60 w-60 hover:scale-125 relative transition duration-500' src={ml} alt="" />
            <img className='object-cover rounded-full h-60 w-60 hover:scale-125 relative transition duration-500' src={lin} alt="" />
            <img className='md:flex md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px] z-20' src={logo} alt="" />
            <img className='object-cover rounded-full h-60 w-60 hover:scale-125 relative transition duration-500' src={x} alt="" />
            <img className='object-cover rounded-full h-60 w-60 hover:scale-125 relative transition duration-500' src={yt} alt="" />
            <img className='object-cover rounded-full h-60 w-60 hover:scale-125 relative transition duration-500' src={fb} alt="" />
        </div>
    </div>
    <div className='flex flex-col justify-center items-center pb-20'>
        <h1 className='w-full flex text-white justify-center font-bold text-5xl md:text-7xl items-center'>Contact Us <span className='bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2'>.</span></h1>
        <p className='text-white text-center md:text-right text-normal sm:text-lg md:text-2xl leading-snug tracking-wide px-6 py-3 md:p-6 md:px-20 lg:px-32'>Designed and Developed by <span className='bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent'>Alexa Developers</span>SRM</p>
    </div>
    </>
  )
}

export default Footer
