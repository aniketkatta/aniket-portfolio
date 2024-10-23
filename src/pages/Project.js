import React from "react";

import "../components/animation.css";
import CubicAnimation from "../components/CubicAnimation";

import { Images } from "../assets/MyImages";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
export const Project = () => {
  return (
    <div className="bg-black text-white h-auto w-[100%] px-8" id="project">
      <h1 className=" mb-4 p-1 md:text-3xl  text-2xl font-bold text-center  text-[#FDBE43] border-b border-[#fdbe43]">
        My Projects
      </h1>

      <div className="relative mb-4 h-[180px] flex justify-center">
        <CubicAnimation />
      </div>

      <div className="swiper mySwiper container bg-black p-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          // slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            // When window width is >= 640px (small screens)
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px (medium screens)
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px (large screens)
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <SwiperSlide className="">
            <div className="swiper-client-msg  h-[450px] w-[300px] bg-[#0e0d0df8] rounded-md flex flex-col items-center">
              <div className="h-[40%] mt-4 w-[90%] flex justify-center items-center bg-white rounded-md">
                <img
                  src={Images.blog}
                  className="h-[130px] w-[70%] object-cover rounded-md"
                />
              </div>
              <div className="px-4">
                <h1 className="font-semibold text-[16px]">Blog App</h1>
                <ul className="text-[14px] italic list-disc pl-4">
                  <li>
                    Developed a full-stack blog application using MERN
                    Technology.
                  </li>
                  <li>
                    Designed and implemented MongoDB database schema for
                    efficient storage and retrieval of blog posts,user profiles.
                  </li>
                  <li>
                    Integrated user authentication and authorization using JWT,
                    enhancing application security and protecting data
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="swiper-client-msg  rounded-md h-[450px] w-[300px] bg-[#0e0d0df8] flex flex-col items-center">
              <div className="h-[40%] mt-4 w-[90%] rounded-md flex justify-center items-center bg-white ">
                <img
                  src={Images.netflix}
                  className="h-[130px] w-[70%] object-cover rounded-md"
                />
              </div>
              <div className="px-4">
                <h1 className="font-semibold text-[16px]">Netflix-Clone</h1>

                <ul className="text-[14px] italic list-disc pl-4">
                  <li>
                    Designed and developed a Netflix clone application using
                    MERN stack .
                  </li>
                  <li>
                    Utilized MongoDB to architect the database schema for
                    storing movie information, including titles, genres, and
                    user interactions.
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="swiper-client-msg  rounded-md h-[450px] w-[300px] bg-[#0e0d0df8] flex flex-col items-center">
              <div className="h-[40%] w-[90%] mt-4 flex justify-center items-center bg-white rounded-md ">
                <img
                  src={Images.netflix}
                  className="h-[130px] w-[70%] object-cover rounded-md"
                />
              </div>
              <div className="px-4">
                <h1 className="font-semibold text-[16px]">
                  Note Taker Application
                </h1>
                <ul className="text-[14px] italic list-disc pl-4">
                  <li>
                    The Note-Taker Application is a web-based system developed
                    using Java, JDBC ,JSP , and MySQL database.
                  </li>
                  <li>
                    The primary goal of the project is to provide users with a
                    platform to create, manage, and organize their notes
                    efficiently.
                  </li>
                  <li>
                    The application offers CRUD functionalities for managing
                    notes along with a secure signup and login system.
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

{
  /* <div className="relative w-[250px] h-[250px]  m-auto rounded-full  border border-white  mb-4 flex flex-col">
          <div className=" w-12 h-12  border rounded-full circle bg-[#1D1D1D]  absolute bottom-0 top-0 left-0 right-0 m-auto flex justify-center items-center">
            <img src={expressjs} className="h-8 w-8" />
          </div>
          <div className=" w-12 h-12 border  rounded-full circle bg-[#1D1D1D]  absolute bottom-0 top-0 left-0 right-0 m-auto flex justify-center items-center">
            <img src={node} className="h-8 w-8" />
          </div>

          <div className=" w-12 h-12 border  rounded-full r1 bg-[#1D1D1D] absolute bottom-0 top-0 left-0 right-0 m-auto flex justify-center items-center">
            <img src={react} className="h-8 w-8" />
          </div>

          <div className=" w-12 h-12 border  rounded-full r1 bg-[#1D1D1D]  absolute bottom-0 top-0 left-0 right-0 m-auto flex justify-center items-center ">
            <img src={mongodb} className="h-8 w-8" />
          </div>

          <div className="w-[200px] h-[200px] border m-auto rounded-full">
            <div className=" w-4 h-4 border  rounded-full r2 bg-white  absolute bottom-0 top-0 left-0 right-0 m-auto flex justify-center items-center "></div>
          </div>
        </div> */
}

{
  /* <div className=" relative timeline">
          <div className="md:w-[50%] mb-2 relative left-0  p-2 flex justify-center items-center container">
            <div className="rounded-md bg-[#262626] text-[#f3f2f2e3]  w-[95%]   gap-2 relative md:border-l-4 border-l-0 md:border-r-0 border-r-4 border-[#fdbe43]">
              <div className="flex justify-center items-center w-[100%]">
                <img src={blog} className="h-[200px] w-[90%] object-cover" />
              </div>
              <div className=" w-[100%] p-4 ">
                <h1 className="font-semibold text-[16px]">Blog App</h1>
                <ul className="text-[14px] italic list-disc pl-4">
                  <li>
                    Developed a full-stack blog application using MERN
                    Technology.
                  </li>
                  <li>
                    Designed and implemented MongoDB database schema for
                    efficient storage and retrieval of blog posts,user profiles.
                  </li>
                  <li>
                    Integrated user authentication and authorization using JWT,
                    enhancing application security and protecting data
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-4 w-4 md:block hidden  rotate-45 bg-[#262626] absolute right-4"></div>
          </div>

          <div className="md:w-[50%]  relative md:left-[50%]  p-2 flex justify-center items-center container">
            <div className="bg-[#262626] text-[#f3f2f2e3] w-[95%] border-r-4 border-[#fdbe43]  flex gap-2 rounded-md relative ">
              <div className="w-[100%] p-4">
                <h1 className="font-semibold text-[16px]">
                  Note Taker Application
                </h1>
                <ul className="text-[14px] italic list-disc pl-4">
                  <li>
                    The Note-Taker Application is a web-based system developed
                    using Java, JDBC ,JSP , and MySQL database.
                  </li>
                  <li>
                    The primary goal of the project is to provide users with a
                    platform to create, manage, and organize their notes
                    efficiently.
                  </li>
                  <li>
                    The application offers CRUD functionalities for managing
                    notes along with a secure signup and login system.
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-4 w-4 md:block hidden rotate-45 bg-[#262626] absolute left-4"></div>
          </div>

          <div className="md:w-[50%] mb-2 relative left-0  p-2 flex justify-center items-center container">
            <div className="rounded-md bg-[#262626] text-[#f3f2f2e3]  w-[95%]   gap-2 relative border-l-0 md:border-r-0 border-r-4 md:border-l-4 border-[#fdbe43] ">
              <div className="flex justify-center items-center w-[100%]">
                <img
                  src={netflix}
                  className="h-[200px] w-[90%] object-cover "
                />
              </div>
              <div className=" w-[100%] p-4 ">
                <h1 className="font-semibold text-[16px]">Netflix-Clone</h1>

                <ul className="text-[14px] italic list-disc pl-4">
                  <li>
                    Designed and developed a Netflix clone application using
                    MERN stack .
                  </li>
                  <li>
                    Utilized MongoDB to architect the database schema for
                    storing movie information, including titles, genres, and
                    user interactions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-4 w-4 md:block hidden rotate-45 bg-[#262626] absolute right-4"></div>
          </div>
        </div> */
}
