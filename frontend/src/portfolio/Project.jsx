import React from 'react'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import { FaGlobe } from "react-icons/fa";

const Project = () => {
  return (
    <div className="px-6 md:px-16 py-16 bg-[#F8FAFC]">
      {/* Web Creation */}
      <div>
        <h2 className="text-3xl font-semibold border-b-2 p-4 mb-14">
          Web Creation
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Project 1 */}
        <div className="bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 border-2">
          <img src={img1} alt="First Project" className="w-full rounded-t-xl" />
          <div className="p-8">
            <h3 className="text-2xl font-semibold">First Project</h3>
            <p className="text-base py-5 text-gray-600">
              Experience Redux's power in action with this dynamic shopping cart. 
              Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.
            </p>
            <FaGlobe className="text-3xl text-gray-500 hover:text-black transition duration-500 cursor-pointer" />
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 border-2">
          <img src={img2} alt="Second Project" className="w-full rounded-t-xl" />
          <div className="p-8">
            <h3 className="text-2xl font-semibold">Second Project</h3>
            <p className="text-base py-5 text-gray-600">
              A modern portfolio built with React and Tailwind CSS, featuring responsive design 
              and smooth animations for a professional showcase.
            </p>
            <FaGlobe className="text-3xl text-gray-500 hover:text-black transition duration-500 cursor-pointer" />
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 border-2">
          <img src={img3} alt="Third Project" className="w-full rounded-t-xl" />
          <div className="p-8">
            <h3 className="text-2xl font-semibold">Third Project</h3>
            <p className="text-base py-5 text-gray-600">
              A React-based dashboard with reusable components, dark mode support, and real-time 
              data visualization.
            </p>
            <FaGlobe className="text-3xl text-gray-500 hover:text-black transition duration-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
