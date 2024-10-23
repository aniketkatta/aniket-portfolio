import React from "react";
import { skill } from "../assets/skills/index";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export const Skills = () => {
  const skills = [
    {
      title: "REACT",
      img: skill.react,
    },
    {
      title: "NODE JS",
      img: skill.node,
    },
    {
      title: "REACT NATIVE",
      img: skill.react,
    },
    {
      title: "REDUX",
      img: skill.redux,
    },
    {
      title: "EXPRESS JS",
      img: skill.express,
    },
    {
      title: "MONGODB",
      img: skill.mongoDb,
    },
    {
      title: "HTML",
      img: skill.html,
    },
    {
      title: "CSS",
      img: skill.css,
    },
    {
      title: "JAVASCRIPT",
      img: skill.javascript,
    },
    {
      title: "TAILWIND CSS",
      img: skill.tailwind,
    },
    {
      title: "JAVA",
      img: skill.java,
    },
    {
      title: "C++",
      img: skill.c,
    },
  ];
  return (
    <div className="h-auto  bg-black  text-white  w-[100%] px-8" id="skills">
      <h1 className=" mb-8 p-1 md:text-3xl  text-2xl font-bold text-center text-[#FDBE43] border-b border-[#fdbe43]">
        My Skills
      </h1>

      <main className=" flex justify-center items-center ">
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-4 lg:w-[90%] w-[100%] mb-4">
          {skills.map((data) => (
            <div
              className="bg-[#0e0d0df8]  logo-img rounded-md flex flex-col justify-center items-center p-4 md:py-10 py-4 relative"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <div className="md:p-4 p-2">
                <img
                  src={data.img}
                  className=" md:h-[60px] md:w-[60px] h-[50px] w-[50px] object-cover "
                />
              </div>

              <h1 className="font-semibold absolute bottom-2 text-[14px] md:text-[16px]">
                {data.title}
              </h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
