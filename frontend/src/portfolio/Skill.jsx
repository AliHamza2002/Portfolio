import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { LiaReact } from "react-icons/lia";

const Skill = () => {
  return (
    <div className='px-6 md:px-16 py-16 bg-[#F8FAFC]'>
      {/* tech stack */}
      <div>
        <h2 className='text-3xl font-semibold border-b-2 p-5'>Tech Stack</h2> 
      </div>

      {/* skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 lg:gap-14 max-w-7xl mx-auto">
        
        <div className="pt-10 md:pt-20 text-center md:text-left">
          <FaHtml5 className="text-8xl text-[#10B981] mx-auto md:mx-0" />
          <h4 className="font-bold text-xl my-5">HTML & CSS</h4>
          <p className="text-base text-gray-600 text-justify max-w-2xl mx-auto md:mx-0">
            Highly skilled in HTML & CSS, adeptly crafting visually appealing and
            responsive websites for optimal user experiences.
          </p>
        </div>

        <div className="pt-10 md:pt-20 text-center md:text-left">
          <FaJsSquare className="text-8xl text-[#10B981] mx-auto md:mx-0" />
          <h4 className="font-bold text-xl my-5">JavaScript</h4>
          <p className="text-base text-gray-600 text-justify max-w-2xl mx-auto md:mx-0">
            Expertise in JavaScript, building interactive and dynamic web applications
            with a focus on seamless user interactions and functionality.
          </p>
        </div>

        <div className="pt-10 lg:pt-20 text-center md:text-left">
          <LiaReact className="text-8xl text-[#10B981] mx-auto md:mx-0" />
          <h4 className="font-bold text-xl my-5">React</h4>
          <p className="text-base text-gray-600 text-justify max-w-2xl mx-auto md:mx-0">
            Advanced proficiency in React, developing efficient and interactive
            front-end applications with a strong emphasis on component-based
            architecture.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Skill
