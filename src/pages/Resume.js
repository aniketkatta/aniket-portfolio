const Resume = () => {
  return (
    <section id="resume" className="bg-black text-white px-8  h-auto ">
      <h1 className="md:text-3xl text-2xl font-bold text-center mb-8 text-[#FDBE43] p-1 border-b border-[#fdbe43]">
        Resume
      </h1>

      {/* Education Section */}
      <div className="mb-8">
        <h2 className="md:text-3xl text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-4 mb-4">
          {/* Graduation*/}
          <div className="p-4 border-l-4 border-[#FDBE43] bg-[#0e0d0df8] shadow-lg rounded-md">
            <h3 className="md:text-xl text-[18px] font-bold">
              B.Tech - Information Technology
            </h3>
            <p className="text-sm text-gray-400">
              Government College of Engineering, Amravati
            </p>
            <p className="text-sm">2019 - 2023</p>
            <p className="text-sm text-gray-400">CGPA : 7.70</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* SSC */}
          <div className="p-4 border-l-4 border-[#FDBE43] bg-[#0e0d0df8] shadow-lg rounded-md">
            <h3 className="md:text-xl text-[18px] font-bold">SSC</h3>
            <p className="text-sm text-gray-400">R.K Jr. College Pulgaon</p>
            <p className="text-sm">2016 - 2017</p>
            <p className="text-sm text-gray-400">Percentage : 85.60%</p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 className="md:text-3xl text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-4">
          {/* Experience Item */}
          <div className="p-4 border-l-4 border-[#FDBE43] bg-[#0e0d0df8]  rounded-md">
            <h3 className="md:text-xl text-[18px] font-bold">
              Full Stack Developer
            </h3>
            <p className="text-sm text-gray-400">Wesolutize Technologies</p>
            <p className="text-sm">April 2024 - Present</p>
            <ul className=" mt-2 text-sm space-y-1 list-disc px-4">
              <li>Developed and maintained scalable ERP and CRM systems.</li>
              <li>
                Designed responsive and interactive UI components using React
                and Tailwind CSS.
              </li>
              <li>Implemented RESTful APIs with Node.js and Express.js.</li>
              <li>Developed android application using React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
