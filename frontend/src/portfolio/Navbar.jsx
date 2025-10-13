import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#DCFCE7] shadow-md">
      <div className="mx-auto flex items-center justify-between py-6 px-8 relative">

        {/* Logo - Left */}
        <div className="">
          <h1 className="text-[2.75rem] font-bold cursor-pointer lg:pl-8">
            Web<span className="text-[#15803D]">Dev</span>
          </h1>
        </div>

        {/* Desktop Links - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <ul className="flex gap-8 items-center text-lg font-medium">
            <li className="hover:text-[#15803D] cursor-pointer transition">Home</li>
            <li className="hover:text-[#15803D] cursor-pointer transition">Skill</li>
            <li className="hover:text-[#15803D] cursor-pointer transition">About</li>
            <li className="hover:text-[#15803D] cursor-pointer transition">Projects</li>
          </ul>
        </div>

        {/* Mobile Menu Icon - Right */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#DCFCE7] px-8 pb-5 space-y-4 text-lg shadow-md">
          <li className="list-none hover:text-[#15803D] cursor-pointer transition">Home</li>
          <li className="list-none hover:text-[#15803D] cursor-pointer transition">Skill</li>
          <li className="list-none hover:text-[#15803D] cursor-pointer transition">About</li>
          <li className="list-none hover:text-[#15803D] cursor-pointer transition">Projects</li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className="bg-[#DCFCE7] shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8">
        
//         {/* Logo */}
//         <h1 className="text-3xl font-bold cursor-pointer">
//           Web<span className="text-[#15803D]">Dev</span>
//         </h1>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex gap-8 items-center text-lg font-medium">
//           <li className="hover:text-[#15803D] cursor-pointer transition">Home</li>
//           <li className="hover:text-[#15803D] cursor-pointer transition">Skill</li>
//           <li className="hover:text-[#15803D] cursor-pointer transition">About</li>
//           <li className="hover:text-[#15803D] cursor-pointer transition">Projects</li>
//         </ul>

//         {/* Button (Optional) */}
//         <button className="hidden md:block px-5 py-2 bg-[#15803D] text-white rounded-lg hover:bg-green-700 transition">
//           Contact
//         </button>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden text-3xl cursor-pointer">☰</div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
