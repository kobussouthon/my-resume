import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full h-[90px] bg-black">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="text-white">
          <h1>K O B I E</h1>
        </div>
        <div className="hidden md:flex">
          <button>
            <ul className="flex text-white items-center">
              <li>Experience</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>About</li>
              <button className="ml-4 bg-gradient-to-r from-gray-400 to-gray-500 py-3 px-7 rounded-3xl">
                Resume
              </button>
            </ul>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className=" text-white" />
          ) : (
            <AiOutlineMenu size={30} className=" text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">Experience</li>
            <li className="text-2xl">Projects</li>
            <li className="text-2xl">Contact</li>
            <li className="text-2xl">About</li>
            <button className=" m-8">Resume</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
