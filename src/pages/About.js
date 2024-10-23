import { useEffect, useRef, useState } from "react";

import { Images } from "../assets/MyImages";
import resume from "../assets/MyImages/Aniket_Resume.pdf";
import "../index.css";
import globe from "../assets/globe.json";
import Lottie from "lottie-react";
function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when component is in view
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
      <div
        className="lg:h-[100vh] h-auto    text-white  w-[100%] px-8 relative"
        id="about"
        ref={ref}
      >
        {/* <Lottie
          animationData={globe}
          loop={true}
          className="absolute h-[500px] w-[500px] top-1/4 right-[20%] opacity-40  z-1"
        /> */}
        ;
        <h1 className=" mb-8 p-1 md:text-3xl  text-2xl font-bold text-center text-[#FDBE43] border-b border-[#fdbe43]">
          About Me
        </h1>
        <main
          className={`flex lg:flex-row flex-col gap-4 w-full ${
            isVisible ? "animate-in" : "opacity-0"
          }`}
        >
          <div className="lg:w-[40%] lg:h-full h-[400px] flex justify-center items-center">
            <img
              src={Images.aniket}
              className="h-full rounded-md"
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            />
          </div>

          <div
            className={`lg:w-[60%] w-full mb-4 ${
              isVisible ? "animate-in" : "opacity-0"
            }`}
          >
            <p
              className="text-[#949292] mb-2 text-justify"
              style={{ wordSpacing: "0.5em" }}
            >
              Hello! I'm Aniket, a passionate and dedicated full-stack developer
              currently working at Wesolutize Technologies. I completed my
              graduation from the Government College of Engineering, Amravati
              (GCOEA) in 2023 with a CGPA of 7.70.{" "}
            </p>
            <p
              className="text-[#949292] mb-2 text-justify"
              style={{ wordSpacing: "0.5em" }}
            >
              My expertise lies in the MERN stack, and I have hands-on
              experience in developing robust and scalable web applications. At
              Wesolutize, I've been actively involved in building and enhancing
              ERP and CRM projects, where I've applied my skills in JavaScript,
              React.js, Node.js, and MongoDB, among other technologies. I am
              well-versed in modern frontend frameworks like React and React
              Native, and I'm proficient in managing state with Redux. My
              backend skills include working with Express.js and building
              RESTful APIs.{" "}
            </p>
            <p
              className="text-[#949292] mb-2 text-justify"
              style={{ wordSpacing: "0.5em" }}
            >
              I'm also skilled in HTML, CSS, Tailwind CSS, and SASS, which I use
              to create clean and responsive user interfaces. Besides web
              technologies, I have a background in programming languages such as
              Java and C++, which has strengthened my problem-solving and
              algorithmic thinking.{" "}
            </p>
            <p
              className="text-[#949292] mb-4 text-justify"
              style={{ wordSpacing: "0.5em" }}
            >
              I'm always eager to learn and embrace new challenges, continually
              seeking opportunities to grow as a developer. Let's connect and
              create something amazing together!
            </p>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 p-2 mb-4"
            >
              Resume
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
