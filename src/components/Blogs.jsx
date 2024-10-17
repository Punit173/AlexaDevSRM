import React from 'react'
import Footer from './Footer'
import sep from "../assets/asset 2.svg";

const Blogs = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 p-8 md:p-16 lg:px-20 text-white items-start justify-center'>
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-5xl font-bold">Our Blogs</h1>
        <img className="mt-7 w-56" src={sep} alt="" />
        <p className='text-lg'>At the SRM Alexa Developer Club, our blog offers a rich blend of tech innovations, from AI and cybersecurity to app development insights. Beyond tech, explore thought-provoking articles on leadership, creativity, and societal impacts. Our diverse content ensures there's always something intriguing for tech enthusiasts and curious minds alike.</p>
        <Footer />
      </div>
    </div>
  )
}

export default Blogs
