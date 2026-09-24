import React, { useState } from "react";
import { motion } from "framer-motion";
import fahim from "../../assets/fahim.png";
import Navbar from "./Navbar/Navbar";
import About from "../About/About.jsx";
import Motion from "../reusable/Motion.jsx";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Top Left Shape */}
      <Motion
        animation="easeInOut"
        className="absolute top-0 left-0 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-blue-500 -z-0 clip-path-polygon"
      />

      {/* Bottom Left Shape */}
      <Motion
        animation="easeInOut"
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-blue-500 -z-0 clip-path-polygon-2"
      />

      {/* Main Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-5 sm:px-8 md:px-10 lg:px-12
          py-16 sm:py-20 md:py-24 lg:py-28
          flex flex-col md:flex-row
          items-center
          gap-10 sm:gap-12 lg:gap-16
        "
      >
        {/* ================= IMAGE ================= */}
        <Motion
          animation="scale"
          duration={0.8}
          className="
            w-full
            md:w-5/12
            lg:w-1/3
            flex
            justify-center
          "
        >
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              rounded-3xl
              overflow-hidden
              shadow-2xl
              w-[220px]
              h-[280px]
              sm:w-[270px]
              sm:h-[340px]
              md:w-[300px]
              md:h-[380px]
              lg:w-[340px]
              lg:h-[430px]
              xl:w-[360px]
              xl:h-[450px]
            "
          >
            <img
              src={fahim}
              alt="Fahim Ahmed"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Motion>

        {/* ================= TEXT ================= */}
        <div
          className="
            w-full
            md:w-7/12
            lg:w-1/2
            space-y-5
            sm:space-y-6
            text-center
            md:text-left
          "
        >
          {/* Name */}
          <Motion animation="fadeLeft" duration={0.7}>
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                text-blue-500
                leading-tight
              "
            >
              -I'M Fahim Ahmed
            </h1>
          </Motion>

          {/* Job Title */}
          <Motion animation="fadeLeft" delay={0.15} duration={0.7}>
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-white
              "
            >
              MERN Stack Developer
            </h2>
          </Motion>

          {/* Description */}
          <Motion animation="fadeUp" delay={0.3} duration={0.7}>
            <p
              className="
                text-sm
                sm:text-base
                md:text-lg
                text-neutral-300
                max-w-xl
                mx-auto
                md:mx-0
                leading-relaxed
              "
            >
              I’m a passionate MERN Stack Developer focused on building clean,
              scalable and user-friendly web applications. I love turning ideas
              into real-world products that solve problems and create impact.
            </p>
          </Motion>

          {/* Button */}
          <Motion animation="fadeUp" delay={0.45} duration={0.7}>
            <div
              className="
                group
                inline-flex
                items-center
                gap-3
                sm:gap-4
                bg-blue-500
                text-black
                font-semibold
                px-5
                sm:px-6
                py-2.5
                sm:py-3
                rounded-full
                hover:bg-blue-400
                transition
                cursor-pointer
              "
            >
              <span className="text-sm sm:text-base">More About Me</span>

              <span
                className="
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-full
                  bg-black
                  text-blue-500
                  flex
                  items-center
                  justify-center
                  group-hover:translate-x-1
                  transition
                "
              >
                <FaArrowDown className="text-sm sm:text-base" />
              </span>
            </div>
          </Motion>
        </div>
      </div>

      {/* Fixed Navigation */}
      <Navbar />

      {/* Custom Clip Paths */}
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .clip-path-polygon-2 {
          clip-path: polygon(0 100%, 100% 100%, 0 0);
        }
      `}</style>
    </section>
  );
};

export default Home;
