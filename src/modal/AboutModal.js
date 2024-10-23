import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import express from "../assets/ex.png";
import expressjs from "../assets/skills/express_skill.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import aniket from "../assets/aniket.jpg";
export const AboutModal = ({ closeModal }) => {
  const skills = [
    "javascript",
    "react.js",
    "react-native",
    "redux",
    "node.js",
    "express.js",
    "mongoDB",
    "html",
    "css",
    "tailwind",
    "sass",
    "java",
    "c++",
  ];

  const mern = [
    {
      img: mongodb,
      text: "M",
      heading: "MongoDB",
      color: "#4BA33D",
      textColor: "#ffffff",
    },
    {
      img: expressjs,
      text: "E",
      heading: "Express Js",
      color: "#ffffff",
      textColor: "#341c6a",
    },
    {
      img: react,
      text: "R",
      heading: "React js",
      color: "#09C9EE",
      textColor: "#ffffff",
    },
    {
      img: node,
      text: "N",
      heading: "Node js",
      color: "#509B41",
      textColor: "#ffffff",
    },
  ];
  const [hoveredTech, setHoveredTech] = useState(null);
  return (
    <div className="fixed bg-black bg-opacity-50 inset-0  flex justify-center items-center z-10">
      <div className="bg-black rounded-xl lg:h-[60%] h-auto lg:w-[70%] w-[85%]">
        <div className="flex justify-end p-2 h-[8%]">
          <RxCross2
            color="white"
            onClick={closeModal}
            size={20}
            className="cursor-pointer"
          />
        </div>

        <div className="flex lg:flex-row flex-col gap-4 h-[90%]">
          <div className="lg:w-[40%] px-4  flex justify-center  items-center">
            <img
              src={aniket}
              className="lg:h-full lg:w-[80%] h-[70%] w-[40%] rounded-full md:block hidden"
            />
          </div>
          <div className="lg:w-[60%] px-6">
            <h1
              className=" text-[24px] text-blue-500 "
              style={{ fontFamily: "lato", fontWeight: 900, fontStyle: "bold" }}
            >
              ABOUT ME
            </h1>
            <p className="text-[#666666] text-ellipsis text-[14px] mb-2">
              I am a full-stack developer at Wesolutize Technologies,
              specializing in building robust and scalable websites using the
              MERN technology. I hold a degree from the Government College of
              Engineering, Amravati (GCOEA), where I graduated with a CGPA of
              7.77.
            </p>

            <div className="">
              {skills.map((skills, index) => (
                <button
                  className="text-[#666666] text-[14px] border p-1 mb-2 rounded-full px-2 mr-2 "
                  key={index}
                >
                  # {skills}
                </button>
              ))}
            </div>

            <div className="flex  gap-4 mt-4">
              {mern.map((tech, index) => (
                <div
                  className="relative flex flex-col items-center "
                  key={index}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {hoveredTech === index && (
                    <div
                      style={{
                        backgroundColor: `${tech.color}`,
                        color: `${tech.textColor}`,
                        // color: "#343c6a",
                      }}
                      className={`absolute -top-10 w-max  font-semibold text-[14px] rounded-full p-2 shadow-lg z-20`}
                    >
                      {tech.heading}
                      <span
                        style={{ backgroundColor: `${tech.color}` }}
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-2 h-2  rotate-45"
                      ></span>
                    </div>
                  )}
                  <img src={tech.img} className="h-8 w-8" />
                  <p className="text-white text-center">{tech.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
