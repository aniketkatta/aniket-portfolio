import React, { useState } from "react";
import { Images } from "../assets/MyImages";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden fixed z-50 top-4 left-0 px-2">
        {!isOpen ? (
          <FaBars
            size={20}
            className="text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <FaTimes
            size={20}
            className="text-white cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <div className={`lg:w-[20%]  h-[100vh]  bg-[#2D373F] lg:block hidden`}>
        <div className="h-[20%]  flex justify-center items-center">
          <img
            src={Images.aniket}
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>

        <div className="h-[60%]  flex flex-col  items-center justify-center">
          <ul
            className=" flex flex-col"
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
          >
            <a
              href="#home"
              className="mb-2 text-[14px] text-white hover:border-b"
            >
              HOME
            </a>
            <a
              href="#about"
              className="mb-2 text-[14px] text-white hover:border-b"
            >
              ABOUT
            </a>
            <a
              href="#project"
              className="mb-2 text-[14px] text-white hover:border-b"
            >
              PROJECT
            </a>
            <a
              href="#skills"
              className="mb-2 text-[14px] text-white hover:border-b"
            >
              SKILLS
            </a>
            <a
              href="#resume"
              className="mb-2 text-[14px] text-white hover:border-b"
            >
              RESUME
            </a>
            <a
              href="#contact"
              className="mb-2 text-[14px] text-white hover:border-b"
            >
              CONTACT
            </a>
          </ul>
        </div>

        <div className="text-[#969494] text-[12px] flex flex-col justify-center p-2">
          <h1>Phone - 9021647824</h1>
          <h1>Email - aniketkambale2032002@gmail.com</h1>
        </div>
      </div>

      {isOpen && (
        <div
          className={`md:w-[50%] w-[70%] absolute top-0 left-0  h-[100vh]  bg-[#2D373F] lg:hidden block z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-[20%] w-[100%]   flex justify-center items-center">
            <img
              src={Images.aniket}
              className="lg:h-16 lg:w-16 md:h-[150px] h-[80px] md:w-[150px] w-[80px] object-cover rounded-full"
            />
          </div>

          <div className="h-[50%]  flex flex-col  items-center justify-center">
            <ul
              className="text-white flex flex-col"
              style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
            >
              <a
                href="#home"
                className="mb-2 md:text-[24px] text-[16px]  lg:text-[14px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                HOME
              </a>
              <a
                href="#about"
                className="mb-2 md:text-[24px] text-[16px] lg:text-[14px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                ABOUT
              </a>
              <a
                href="#project"
                className="mb-2 md:text-[24px] text-[16px] lg:text-[14px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                PROJECT
              </a>
              <a
                href="#skills"
                className="mb-2 md:text-[24px] text-[16px] lg:text-[14px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                SKILLS
              </a>
              <a
                href="#resume"
                className="mb-2 md:text-[24px] text-[16px] lg:text-[14px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                RESUME
              </a>
              <a
                href="#contact"
                className="mb-2  md:text-[24px] text-[16px] lg:text-[14px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                CONTACT
              </a>
            </ul>
          </div>

          <div className="text-[#969494] lg:text-[12px] text-[14px] flex flex-col justify-center p-2">
            <h1>Phone - 9021647824</h1>
            <h1 style={{ wordBreak: "break-all" }}>
              Email - aniketkambale2032002@gmail.com
            </h1>
          </div>
        </div>
      )}
    </>
  );
};
