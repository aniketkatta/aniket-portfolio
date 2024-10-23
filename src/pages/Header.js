import React, { useState } from "react";
import header_logo from "../assets/MyImages/white_bg.png";

import { MdClose, MdMenu } from "react-icons/md";
export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-[10%] fixed top-0  bg-[#1D1D1D] w-full z-10  flex justify-between px-4 items-center ">
      <img src={header_logo} className="lg:h-[80%] lg:w-[6%] h-[50%] w-[15%]" />

      <div className="w-[50%] md:block hidden text-white">
        <ul className="flex justify-between items-center ">
          <a
            href="#home"
            className="cursor-pointer font-semibold hover:text-[#FDBE43] p-2 hover:border-b hover:border-[#FDBE43]"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer font-semibold hover:text-[#FDBE43] p-2 hover:border-b hover:border-[#FDBE43]"
          >
            About Me
          </a>
          <a
            href="#project"
            className="cursor-pointer font-semibold hover:text-[#FDBE43] p-2 hover:border-b hover:border-[#FDBE43]"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="cursor-pointer font-semibold hover:text-[#FDBE43] p-2 hover:border-b hover:border-[#FDBE43]"
          >
            Skills
          </a>
          <a
            href="#resume"
            className="cursor-pointer font-semibold hover:text-[#FDBE43] p-2 hover:border-b hover:border-[#FDBE43]"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="cursor-pointer font-semibold hover:text-[#FDBE43] p-2 hover:border-b hover:border-[#FDBE43]"
          >
            Contact
          </a>
        </ul>
      </div>

      <div className="md:hidden block">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MdClose color="white" size={20} />
          ) : (
            <MdMenu color="white" size={20} />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-20 right-0 h-[100%] bg-[#1D1D1D]  z-20 w-[100%] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center  h-[50%] p-4 text-white">
          <li className="py-4 w-[100%] text-center hover:bg-[#666666] ">
            <a
              href="#home"
              className="cursor-pointer font-semibold  w-full"
              onClick={toggleSidebar}
            >
              Home
            </a>
          </li>
          <li className="py-4 w-[100%] text-center hover:bg-[#666666]">
            <a
              href="#about"
              className="cursor-pointer font-semibold"
              onClick={toggleSidebar}
            >
              About Me
            </a>
          </li>
          <li className="py-4  w-[100%] text-center hover:bg-[#666666] ">
            <a
              href="#project"
              className="cursor-pointer font-semibold"
              onClick={toggleSidebar}
            >
              Projects
            </a>
          </li>
          <li className="py-4  w-[100%] text-center hover:bg-[#666666]">
            <a
              href="#skills"
              className="cursor-pointer font-semibold"
              onClick={toggleSidebar}
            >
              Skills
            </a>
          </li>
          <li className="py-4  w-[100%] text-center hover:bg-[#666666]">
            <a
              href="#resume"
              className="cursor-pointer font-semibold"
              onClick={toggleSidebar}
            >
              Resume
            </a>
          </li>
          <li className="py-4  w-[100%] text-center hover:bg-[#666666]">
            <a
              href="#contact"
              className="cursor-pointer font-semibold"
              onClick={toggleSidebar}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
