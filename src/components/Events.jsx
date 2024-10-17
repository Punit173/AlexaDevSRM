import React from 'react'
import Footer from './Footer'
import sep from "../assets/asset 2.svg";

const Events = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 p-8 md:p-16 lg:px-20 text-white items-start justify-center'>
        <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-5xl font-bold">Our Events</h1>
        <img className="mt-7 w-56" src={sep} alt="" />
        <p className='text-lg'>The SRM Alexa Developer Club is a hub of excitement with events like Git 101, hackathons, workshops, and tech games. Learn essential skills in Git 101, unleash your creativity in hackathons, dive deep into cutting-edge tech during workshops, and enjoy the thrill of competition in tech games. Each event ignites passion, fosters innovation, and builds a strong tech community.</p>
        <Footer />
      </div>
    </div>
  )
}

export default Events
