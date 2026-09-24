import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fahim from "../../assets/fahim.png";
import Navbar from "./Navbar/Navbar";
import About from "../About/About.jsx";
import Motion from "../reusable/Motion.jsx";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <Motion
        animation="easeInOut"
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500 -z-0 clip-path-polygon"
      />

      <Motion
        animation="easeInOut"
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 -z-0 clip-path-polygon-2"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <Motion
          animation="scale"
          duration={0.8}
          className="w-full md:w-1/3 flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="rounded-3xl overflow-hidden shadow-2xl w-[280px] sm:w-[320px] md:w-[360px]"
          >
            <img
              src={fahim}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Motion>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <Motion animation="fadeLeft" duration={0.7}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight">
              -I'M Fahim Ahmed
            </h1>
          </Motion>

          {/* Job Title */}
          <Motion animation="fadeLeft" delay={0.15} duration={0.7}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              MERN Stack Developer
            </h2>
          </Motion>

          {/* Description */}
          <Motion animation="fadeUp" delay={0.3} duration={0.7}>
            <p className="text-neutral-300 max-w-xl">
              I’m a passionate MERN Stack Developer focused on building clean,
              scalable and user-friendly web applications. I love turning ideas
              into real-world products that solve problems and create impact.
            </p>
          </Motion>

          {/* Button */}
          <Motion animation="fadeUp" delay={0.45} duration={0.7}>
            <div className="group inline-flex items-center gap-4 bg-blue-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-blue-400 transition">
              More About Me
              <span className="w-10 h-10 rounded-full bg-black text-blue-500 flex items-center justify-center group-hover:translate-x-1 transition">
                <FaArrowDown />
              </span>
            </div>
          </Motion>
        </div>
      </div>

      {/* Fixed Navigation */}
      <Navbar />

      {/* Custom clip paths */}
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
