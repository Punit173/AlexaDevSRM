import React from "react";
import sep from "../assets/asset 2.svg";
import logo from "../assets/asset 1.svg";
import grphoto from "../assets/asset 3.png"
import js from "../assets/asset 4.svg"
import ux from "../assets/asset 5.svg"
import fb from "../assets/asset 6.svg"
import at from "../assets/asset 7.svg"
import eve1 from "../assets/asset 8.jpeg"
import eve2 from "../assets/asset 9.jpeg"
import eve3 from "../assets/asset 10.jpeg"
import eve4 from "../assets/asset 11.jpeg"
import '../App.css'

const Home = () => {
    return (
        <>
            <div className="relative z-10 flex items-center px-2 md:px-10 py-4 w-full mx-auto rounded-md h-[93vh] max-h-[calc(100vh-20%)] overflow-hidden">
                <div className="ml-4 md:ml-12 lg:ml-24">
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Alexa Developers SRM
                    </h1>
                    <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold mt-8 md:mt-16">
                        "Voices United,"
                    </h1>
                    <h1 className="ml-20 sm:ml-30 md:ml-40 lg:ml-56 xl:ml-72 bg-gradient-to-r from-[#31B553] to-[#11dfca] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold mt-8 md:mt-16">
                        "Tech Amplified"
                    </h1>
                    <img
                        className="mt-5 sm:mt-24 md:mt-40 relative z-10 flex items-center px-2 md:px-10 py-4 w-[500px]"
                        src={sep}
                        alt=""
                    />
                </div>
                <div>
                    <img
                        className="sm:inline right-0 lg:right-20 -z-10 h-40 w-40 sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] xl:h-[800px] xl:w-[800px]"
                        src={logo}
                        alt=""
                    />
                </div>
            </div>
            <div className="h-full w-auto flex flex-col items-center justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden pb-8">
                <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-5xl font-medium text-center">About Us</h1>
                <img className="mt-7 w-56" src={sep} alt="" />
                <div className="flex flex-col md:flex-row md:items-start md:text-right w-auto px-2 space-y-6 md:space-y-0 md:space-x-6 items-center justify-center">
                    <div className="md:pl-32 md:w-3/5 p-4 md:pt-28">
                        <img className="rounded-2xl shadow-md object-cover w-full h-auto" src={grphoto} alt="" />
                    </div>
                    <div className="md:w-9/12 py-2 space-x-2 space-y-4 text-right sm:text-center">
                        <p className="text-white text-center md:text-right text-normal sm:text-lg md:text-2xl leading-snug tracking-wide px-6 py-3 md:p-6 md:px-20 lg:px-32">
                            Welcome to <span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent">Alexa Developers</span> SRM, a thriving, student-run technical
                            organization at SRMIST that brings technology and community
                            together. We create an open atmosphere for tech enthusiasts to
                            explore, learn, and grow, with a focus on voice-controlled
                            technologies, application development, and UI/UX design via hands-on
                            events and workshops. Our club is a hotbed of collaboration and
                            innovation, where members can experiment, share expertise, and make
                            a real difference. Whether you're a newcomer to technology or a
                            seasoned professional, our wide range of workshops, hackathons, and
                            contests provide ongoing learning and practical skill development.
                        </p>
                        <p className="text-white text-center md:text-right text-normal sm:text-lg md:text-2xl leading-snug tracking-wide px-6 py-3 md:p-6 md:px-20 lg:px-32">Together we build a community, where creativity knows no bounds and collaboration is key.</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-fill flex flex-col items-center justify-center gap-4">
                <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-5xl font-medium text-center">Our Domains</h1>
                <img className="mt-7 w-56" src={sep} alt="" />
                <div className="w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40 ">
                    <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6">
                        <h1 className="w-full text-7xl font-semibold">Technical<span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">.</span></h1>
                        <p className="w-full text-normal sm:text-lg md:text-2xl leading-snug tracking-wide">A vibrant community of tech enthusiasts collaborating and transforming the future. The tech domain works together to perfect frontend user experiences, build robust systems in backend, and innovate ideas through app dev, elevating their skills throughout the journey.</p>
                    </div>
                    <div className="w-1/2 h-full flex place-items-end justify-end relative">
                        <img className="relative right-0 -top-5" src={js} alt="" />
                    </div>
                </div>
                <div className="w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40 ">
                    <div className="w-1/2 h-full flex items-start justify-start relative">
                        <img className="z-10  shadow-black" src={ux} alt="" />
                    </div>
                    <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6 text-end">
                        <h1 className="w-full text-7xl font-semibold">Creatives<span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">.</span></h1>
                        <p className="w-full text-normal sm:text-lg md:text-2xl leading-snug tracking-wide">In the Creatives domain, ideas evolve into unforgettable experiences. The talented content writers and designers have mastered the creation of compelling narratives and seamless design interfaces. Experience the forefront of creativity as they shape the art of engagement.</p>
                    </div>
                </div>
                <div className="w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40 ">
                    <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6">
                        <h1 className="w-full text-7xl font-semibold">Events<span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">.</span></h1>
                        <p className="w-full text-normal sm:text-lg md:text-2xl leading-snug tracking-wide">The heartbeat of the club, from brainstorming brilliant ideas to executing them with precision, ensures that each event is not just memorable but leaves a lasting impact on everyone involved. Our events domain thrives because of the hard work and creativity of the team.</p>
                    </div>
                    <div className="w-1/2 h-full flex place-items-end justify-end relative">
                        <img className="relative right-0 -top-5" src={fb} alt="" />
                    </div>
                </div>
                <div className="w-full md:flex md:flex-row flex-col lg:gap-10 text-white px-8 lg:px-40 ">
                    <div className="w-1/2 h-full flex items-start justify-start relative">
                        <img className="z-10  shadow-black" src={at} alt="" />
                    </div>
                    <div className="w-1/2 f-full flex flex-col items-center justify-center gap-6 text-end">
                        <h1 className="w-full text-7xl font-semibold">Business<span className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent ml-2">.</span></h1>
                        <p className="w-full text-normal sm:text-lg md:text-2xl leading-snug tracking-wide">The business domain is at the forefront, fostering innovation and entrepreneurial spirit among students. It provides real-world relations and networking opportunities with industry professionals, bringing in amazing sponsors through skilled PR activities and bringing imagination to life.</p>
                    </div>
                </div>
            </div>
            <div className="h-[40rem] rounded-md flex flex-col  antialiased bg-transparent items-center justify-center relative overflow-hidden">
                <h1 className="bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent text-5xl font-medium text-center">Our Events</h1>
                <img className="mt-7 w-56 mb-12" src={sep} alt="" />

                <div className="flex justify-center items-center h-screen">
                    <div className="scroll-container flex w-[1000px]">
                        <div className="flex animate-scroll">
                            <div className="h-96 relative rounded-2xl border border-slate-700 p-4 flex-shrink-0">
                                <span className="absolute bottom-6 left-6 z-40 text-4xl font-bold bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent hover:scale-125">Git 101</span>
                                <img className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-50" src={eve1} alt="" />
                            </div>
                            <div className="h-96 relative rounded-2xl border border-slate-700 p-4 flex-shrink-0">
                                <span className="absolute bottom-6 left-6 z-40 text-4xl font-bold bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent hover:scale-125">UI/UX</span>
                                <img className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-50" src={eve2} alt="" />
                            </div>
                            <div className="h-96 relative rounded-2xl border border-slate-700 p-4 flex-shrink-0">
                                <span className="absolute bottom-6 left-6 z-40 text-4xl font-bold bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent hover:scale-125">TechNextGen</span>
                                <img className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-50" src={eve3} alt="" />
                            </div>
                            <div className="h-96 relative rounded-2xl border border-slate-700 p-4 flex-shrink-0">
                                <span className="absolute bottom-6 left-6 z-40 text-4xl font-bold bg-gradient-to-r from-[#31B553] to-[#0AA294] bg-clip-text text-transparent hover:scale-125">Graph Q?</span>
                                <img className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-50" src={eve4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Home;
