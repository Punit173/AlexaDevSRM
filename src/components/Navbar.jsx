import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; 
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-800">
            <nav className='flex items-center justify-between p-5'>
                <div>
                    <img src="https://www.alexadevsrm.org/_next/image?url=%2Fnav-logo.png&w=384&q=75" alt="logo" className="h-8" />
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
                    </button>
                </div>

                <div className={`md:flex md:items-center md:gap-10 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className='text-white font-medium flex flex-col md:flex-row gap-10'>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive
                                ? 'bg-blue-500 shadow-lg shadow-blue-500/50 p-2 rounded translate-y-1 ring-2 ring-blue-300 transition-all duration-200'
                                : 'p-2 rounded translate-y-1 hover:translate-y-0 transition-transform duration-200 hover:ring-2 hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-500/50'
                        }>
                            Home
                        </NavLink>
                        <NavLink to="/event" className={({ isActive }) =>
                            isActive
                                ? 'bg-blue-500 shadow-lg shadow-blue-500/50 p-2 rounded translate-y-1 ring-2 ring-blue-300 transition-all duration-200'
                                : 'p-2 rounded translate-y-1 hover:translate-y-0 transition-transform duration-200 hover:ring-2 hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-500/50'
                        }>
                            Events
                        </NavLink>
                        <NavLink to="/ourteam" className={({ isActive }) =>
                            isActive
                                ? 'bg-blue-500 shadow-lg shadow-blue-500/50 p-2 rounded translate-y-1 ring-2 ring-blue-300 transition-all duration-200'
                                : 'p-2 rounded translate-y-1 hover:translate-y-0 transition-transform duration-200 hover:ring-2 hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-500/50'
                        }>
                            Our Team
                        </NavLink>
                        <NavLink to="/blogs" className={({ isActive }) =>
                            isActive
                                ? 'bg-blue-500 shadow-lg shadow-blue-500/50 p-2 rounded translate-y-1 ring-2 ring-blue-300 transition-all duration-200'
                                : 'p-2 rounded translate-y-1 hover:translate-y-0 transition-transform duration-200 hover:ring-2 hover:ring-blue-300 hover:shadow-lg hover:shadow-blue-500/50'
                        }>
                            Blogs
                        </NavLink>
                    </ul>
                    <a href="https://www.alexadevsrm.org/apply">
                        <button className='mt-4 md:mt-0 px-8 py-2 translate-y-1 hover:translate-y-0 rounded-full bg-gradient-to-b from-[#31B553] to-[#0AA294] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200'>
                            Apply Now
                        </button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
