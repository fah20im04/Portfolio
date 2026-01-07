import React from "react";
import {
  FaDownload,
  FaBriefcase,
  FaSmile,
  FaAward,
  FaCheckCircle,
  FaGithub,
} from "react-icons/fa";
import StatCard from "./StatCard";
import MySkills from "./MySkills";
import ExperienceEducation from "./ExperienceEducation";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-4 md:p-12 lg:p-8">
      {/* Title section matching the image style */}
      <header className="relative text-center mb-10 pt-8">
        <h1 className="text-[5rem] md:text-[8rem] font-extrabold text-white/5 uppercase tracking-widest leading-none">
          Resume
        </h1>
        <div className="absolute top-3/5 sm:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase flex items-center">
            <span className="text-white ">ABOUT</span>
            <span className="text-blue-500 ml-3">ME</span>
          </h2>
        </div>
      </header>

      <main>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-28">
          <div>
            <h3 className="text-3xl font-bold mb-8">PERSONAL INFOS</h3>
            <div className="flex flex-col md:flex-row gap-20">
              <div className="space-y-4 max-w-md">
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>First Name:</span>
                      <span className="text-white font-bold">Fahim</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Age:</span>
                      <span className="text-white font-bold">21 Years</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Freelance:</span>
                      <span className="text-green-500 font-bold">
                        Available
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    Phone: <span className="font-bold">+8801935841938</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>GitHub:</span>
                      <span className=" font-bold">
                        <a href="https://github.com/fah20im04">fah20im04</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 max-w-md">
                <ul className="space-y-5">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Last Name:</span>
                      <span className="text-white font-bold">Ahmed</span>
                    </div>
                  </li>

                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Address:</span>
                      <span className=" font-bold">Sylhet, Bangladesh</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Email:</span>
                      <span className=" font-bold">fa369383@gmail.com</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Languages:</span>
                      <span className=" font-bold">Bangla,English,Hindi</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-blue-500 mr-2" />

                    <div className="flex items-center space-x-2">
                      <span>Nationality:</span>
                      <span className="text-white font-bold">Bangladeshi</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <StatCard />
        </div>
        <button
          className="
        relative
        mt-12 md:mt-0
        mx-auto md:mx-0
        flex 
        items-center 
        h-14 
        w-74 
        max-w-xs 
        pr-4 
        rounded-full 
        bg-gray-900 
        border-2 
        border-blue-500 
        overflow-hidden
        transition-shadow 
        duration-300
        hover:shadow-lg hover:shadow-blue-500/50
      "
        >
          {/* Text area */}
          <span
            className="
          flex-grow 
          text-lg 
          font-bold 
          text-white 
          uppercase 
          tracking-wider 
          ml-6
        "
          >
            Download CV
          </span>

          {/* Circular Icon Area */}
          <div
            className="
          absolute 
          right-0 
          h-full 
          aspect-square 
          rounded-full 
          bg-blue-500 
          flex 
          items-center 
          justify-center
        "
          >
            {/* The Download Icon */}
            <FaDownload className="text-white text-xl" />
          </div>
        </button>
      </main>
      <section>
        {/* Statistics Cards Section */}
        <MySkills />
        <ExperienceEducation />
      </section>
    </section>
  );
};

export default About;
