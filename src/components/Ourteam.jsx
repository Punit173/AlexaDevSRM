import React from 'react'
import Footer from './Footer'
import sep from "../assets/asset 2.svg";

const Ourteam = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 p-8 md:p-16 lg:px-20 text-white items-start justify-center'>
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-5xl font-bold">Our Team</h1>
        <img className="mt-7 w-56" src={sep} alt="" />
        <p className='text-lg'>Our team at the SRM Alexa Developer Club includes passionate members, dedicated executives, and a visionary head, all working together to foster innovation, learning, and community engagement through dynamic events and activities.</p>
        <Footer />
      </div>
    </div>
  )
}

export default Ourteam
