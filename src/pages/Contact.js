import React from "react";
import { IoIosAlert } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import { MdLocationPin } from "react-icons/md";

export const Contact = () => {
  return (
    // bg-[#222222]
    <div className="lg:h-[100vh] h-auto   px-8 " id="contact">
      <h1 className="text-[#FDBE43] border-b border-[#fdbe43] font-bold text-center p-1 md:text-3xl  text-2xl mb-8">
        Contact Me
      </h1>

      <div className="flex h-[50%] flex-col ">
        <div className="lg:w-[100%]  w-full flex flex-col  items-center mb-2">
          <div className="flex flex-col space-y-1 md:w-[70%] w-[90%]  mb-2">
            <label className="text-[12px]">NAME</label>
            <div className="w-full relative">
              <input
                placeholder="Enter name"
                className="bg-[#0e0d0df8] border-b border-[#666666] p-2  placeholder:text-[14px] w-full  outline-none "
              />
              <IoIosAlert
                size={18}
                className="absolute text-[#666666] top-3 right-2"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1 md:w-[70%] w-[90%]  mb-2">
            <label className="text-[12px]">EMAIL</label>
            <div className="w-full relative">
              <input
                placeholder="Enter Email"
                type="email"
                className="bg-[#0e0d0df8] border-b border-[#666666] p-2  placeholder:text-[14px] w-full  outline-none "
              />
              <IoIosAlert
                size={18}
                className="absolute text-[#666666] top-3 right-2"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1 md:w-[70%] w-[90%]  mb-4">
            <label className="text-[12px]">MESSAGE</label>
            <div className="w-full relative">
              <textarea
                placeholder="Enter Message"
                rows={3}
                className="bg-[#0e0d0df8] border-b border-[#666666] p-2 resize-none  w-full placeholder:text-[14px] outline-none "
              />

              <IoIosAlert
                size={18}
                className="absolute text-[#666666] top-3 right-2"
              />
            </div>
          </div>

          <button className="p-2 border md:w-[70%] w-[90%]  bg-white border-[#666666] text-[14px]    text-[#1d1d1d] rounded-md transition-all duration-150 ease-in-out shadow-lg hover:shadow-xl active:shadow-sm transform active:translate-y-1 active:scale-95">
            SEND MESSAGE
          </button>
        </div>

        <div className="lg:w-[100%] w-full flex flex-col  items-center   p-4">
          <div className=" md:w-[70%] w-[90%]">
            <h1 className="text-[12px] mb-2">CONTACT DETAILS</h1>
            <h1 className="flex flex-row gap-2 items-center mb-2 text-[#666666]">
              <FaMobileScreen className="text-[#666666]" size={18} /> +91
              9021647824
            </h1>

            <h1 className="flex flex-row gap-2 items-center text-[#666666] mb-2">
              <MdOutlineEmail className="text-[#666666]" size={18} />{" "}
              aniketkambale2032002@gmail.com
            </h1>

            <h1 className="flex flex-row gap-2 items-center text-[#666666]">
              <MdLocationPin className="text-[#666666]" size={18} /> Pune,
              Maharashtra INDIA
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
