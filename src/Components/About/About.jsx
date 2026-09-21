import React from "react";
import {
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

import StatCard from "./StatCard";
import MySkills from "./MySkills";
import ExperienceEducation from "./ExperienceEducation";
import Motion from "../reusable/Motion";
import { leftInfo, rightInfo } from "../../data/About";

const About = () => {

  const InfoItem = ({ item, index }) => {
    return (
      <Motion
        animation="fadeLeft"
        delay={index * 0.08}
        duration={0.5}
      >
        <li className="flex items-center">
          <FaCheckCircle className="text-blue-500 mr-2 shrink-0" />

          <div className="flex items-center space-x-2">
            <span>{item.label}</span>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-blue-500 transition"
              >
                {item.value}
              </a>
            ) : (
              <span
                className={`font-bold ${
                  item.className || "text-white"
                }`}
              >
                {item.value}
              </span>
            )}
          </div>
        </li>
      </Motion>
    );
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white p-4 md:p-12 lg:p-8">
      {/* ================= TITLE ================= */}
      <Motion
        animation="fadeUp"
        duration={0.7}
        className="relative text-center mb-10 pt-8"
      >
        {/* Background Title */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-[5rem] md:text-[8rem] font-extrabold text-white/5 uppercase tracking-widest leading-none"
        >
          ABOUT ME
        </motion.h1>

        {/* Main Title */}
        <div className="absolute top-3/5 sm:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase flex items-center whitespace-nowrap">
            <span className="text-white">ABOUT</span>

            <span className="text-blue-500 ml-3">
              ME
            </span>
          </h2>
        </div>
      </Motion>

      {/* ================= MAIN CONTENT ================= */}
      <main>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-28">

          {/* ================= PERSONAL INFO ================= */}
          <Motion
            animation="fadeLeft"
            duration={0.7}
          >
            <div>
              <h3 className="text-3xl font-bold mb-8">
                PERSONAL INFOS
              </h3>

              <div className="flex flex-col md:flex-row gap-20">

                {/* LEFT INFO */}
                <div className="space-y-4 max-w-md">
                  <ul className="space-y-5">
                    {leftInfo.map((item, index) => (
                      <InfoItem
                        key={index}
                        item={item}
                        index={index}
                      />
                    ))}
                  </ul>
                </div>

                {/* RIGHT INFO */}
                <div className="space-y-4 max-w-md">
                  <ul className="space-y-5">
                    {rightInfo.map((item, index) => (
                      <InfoItem
                        key={index}
                        item={item}
                        index={index + 5}
                      />
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </Motion>

          {/* ================= STAT CARDS ================= */}
          <Motion
            animation="fadeRight"
            delay={0.2}
            duration={0.7}
            className="w-full"
          >
            <StatCard />
          </Motion>
        </div>

        {/* ================= DOWNLOAD CV ================= */}
        <Motion
          animation="fadeUp"
          delay={0.3}
          duration={0.6}
          className="w-fit"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
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
              hover:shadow-lg
              hover:shadow-blue-500/50
            "
          >
            {/* Text */}
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

            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: -10,
              }}
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
              <FaDownload className="text-white text-xl" />
            </motion.div>
          </motion.button>
        </Motion>
      </main>

      {/* ================= SKILLS & EXPERIENCE ================= */}
      <section>
        <Motion
          animation="fadeUp"
          duration={0.7}
        >
          <MySkills />
        </Motion>

        <Motion
          animation="fadeUp"
          duration={0.7}
        >
          <ExperienceEducation />
        </Motion>
      </section>
    </section>
  );
};

export default About;