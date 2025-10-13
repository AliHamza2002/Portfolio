import React from 'react'
import about from '../assets/img/about.svg'

const About = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-20 py-16 px-6 md:px-10 max-w-ful items-center">
        
        {/* Left Side - Image */}
        <img 
          src={about} 
          alt="About Ali Hamza" 
          className="w-64 md:w-[21.25rem] mx-auto"
        />

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="flex flex-col gap-y-4 max-w-xl leading-relaxed">
            <h3 className="font-semibold text-2xl md:text-3xl tracking-wide">
              Code And Coffee
            </h3>
            <hr className="border-gray-300 pb-2 w-full mx-auto md:mx-0" />
            <p className="text-gray-600 text-base md:text-lg text-justify">
              I'm Ali Hamza, a seasoned web developer with expertise in React and component-based projects. 
              With a year of experience, I've mastered Redux for global state management and wield Axios for seamless data fetching. 
              Let's collaborate and transform your ideas into digital brilliance!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
