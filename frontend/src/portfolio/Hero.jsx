import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import hero_img from '../assets/img/hero_img.svg'

const Hero = () => {
  return (
    // Main Body
    <div className="bg-[#DCFCE7] px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-center h-auto md:h-[84vh]">

      {/* Left side */}
      <div className="my-auto text-center md:text-left md:w-1/2">
        <h1 className="font-bold text-4xl lg:text-6xl mb-6 lg:pr-20">
          I'm Ali Hamza 
        </h1>
        <h4 className="text-2xl md:text-3xl font-medium mb-3">
          Front-End Developer
        </h4>
        <p className="pb-3 text-base md:text-lg">
          Turning Ideas Into Interactive Reality
        </p>
        <div className="flex justify-center md:justify-start text-4xl md:text-5xl text-gray-500 gap-5">
          <FaGithubSquare className="hover:text-black transition duration-500 cursor-pointer" />
          <FaLinkedin className="hover:text-black transition duration-500 cursor-pointer" />
          <FaTwitterSquare className="hover:text-black transition duration-500 cursor-pointer" />
        </div>
      </div>

      {/* Right side */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img src={hero_img} alt="Ali Hamza" className="w-64 md:w-96" />
      </div>
    </div>
  )
}

export default Hero
