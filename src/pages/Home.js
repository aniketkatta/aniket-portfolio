import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useState } from "react";
import "../components/animation.css";
import { FaGithub } from "react-icons/fa6";
import { skill } from "../assets/skills";
import { Images } from "../assets/MyImages";
import TsAnime from "../components/TsAnime";
import Lottie from "lottie-react";
import globe from "../assets/globe.json";
function Home() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="relative h-[100%] w-[100%] overflow-hidden">
      <div className="circles-container">
        <div className="circle">
          <img src={skill.react} className="h-[20px] w-[20px] object-cover" />
        </div>
        <div className="circle">
          <img src={skill.node} className="h-[20px] w-[20px] object-cover" />
        </div>
        <div className="circle">
          <img src={skill.express} className="h-[20px] w-[20px] object-cover" />
        </div>
        <div className="circle">
          <img src={skill.mongoDb} className="h-[20px] w-[20px] object-cover" />
        </div>
      </div>

      <TsAnime />

      <div className="h-[100%] w-[97%] absolute  flex justify-center items-center">
        <Lottie
          animationData={globe}
          loop={true}
          className=" h-[500px] w-[500px]  opacity-40 "
        />
      </div>

      <div className="h-[100vh] " id="home">
        <main className="h-full w-full flex  items-center">
          <div
            className="md:h-[70%] h-[80%]  w-full bg-no-repeat   bg-center flex md:flex-row flex-col   justify-between items-center px-6 md:py-0 py-4  "
            style={{ backgroundImage: `url(${Images.logoBg})` }}
          >
            <div className="text-white  md:w-[40%]  flex justify-center lg:justify-start items-center flex-col ">
              <div className="flex flex-col gap-2 items-center ">
                <h1
                  className="md:text-[38px] text-3xl text-center lg:text-start"
                  style={{
                    fontFamily: "lato",
                    fontWeight: 900,
                    fontStyle: "bold",
                  }}
                >
                  I'm Aniket Kamble
                </h1>
                <p
                  className="text-[20px] typing-effect"
                  style={{
                    fontFamily: "IM Fell DW Pica",
                    fontWeight: 400,
                    fontStyle: "normal",
                  }}
                >
                  I'm Full Stack Developer
                </p>
              </div>
            </div>

            <div className=" w-[5%] flex justify-center items-center">
              <ul className="flex md:flex-col flex-row   md:space-y-4 space-y-0 p-2 md:space-x-0 space-x-4 social z-20">
                <li className=" p-2 hover:text-[#087EBB]">
                  <a
                    href="https://www.linkedin.com/in/aniket-kamble-5b8498226/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </li>

                <li className=" p-2 hover:text-[#AF2B32]">
                  <a href="mailto:aniketkambale2032002@gmail.com">
                    <CgMail size={20} />
                  </a>
                </li>

                <li className=" p-2">
                  <a
                    href="https://github.com/aniketkatta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>

                <li className=" p-2 hover:text-orange-500">
                  <FaInstagram size={20} />
                </li>

                <li className=" p-2 hover:text-red-500">
                  <FaYoutube size={20} className="" />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="menu ">
              <div className="toggle" onClick={toggleMenu}>
                <FaPlus color="black" size={20} />
              </div>

              <li style={{ "--i": 0 }}>
                <FaLinkedinIn className="a" />
              </li>

              <li style={{ "--i": 1 }}>
                <FaInstagram className="a" />
              </li>

              <li style={{ "--i": 2 }}>
                <FaYoutube className="a" />
              </li>

              <li style={{ "--i": 3 }}>
                <CgMail className="a" />
              </li>

              <li style={{ "--i": 4 }}>
                <FaGithub className="a" />
              </li>
            </div> */
}
