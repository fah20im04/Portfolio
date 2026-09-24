import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import StatCard from "./StatCard";
import Motion from "../reusable/Motion";
import { leftInfo, rightInfo } from "../../data/About";
import { CVbtn } from "./CVbtn";

const About = () => {
  const InfoItem = ({ item, index }) => {
    return (
      <Motion animation="fadeLeft" delay={index * 0.08} duration={0.5}>
        <li className="flex items-start sm:items-center">
          <FaCheckCircle className="text-blue-500 mr-2 mt-1 sm:mt-0 shrink-0" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span>{item.label}</span>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-blue-500 transition break-all"
              >
                {item.value}
              </a>
            ) : (
              <span className={`font-bold ${item.className || "text-white"}`}>
                {item.value}
              </span>
            )}
          </div>
        </li>
      </Motion>
    );
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* ================= TITLE ================= */}
      <Motion
        animation="fadeUp"
        duration={0.7}
        className="relative text-center mb-10 sm:mb-14 md:mb-16 pt-4 sm:pt-8"
      >
        {/* Background Title */}
        <Motion
          animation="fadeUp"
          delay={0.2}
          duration={0.7}
          className="
            text-[3.5rem]
            sm:text-[5rem]
            md:text-[7rem]
            lg:text-[8rem]
            font-extrabold
            text-white/5
            uppercase
            tracking-widest
            leading-none
            whitespace-nowrap
          "
        >
          ABOUT ME
        </Motion>

        {/* Main Title */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-full
          "
        >
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              uppercase
              flex
              items-center
              justify-center
              whitespace-nowrap
            "
          >
            <span className="text-white">ABOUT</span>

            <span className="text-blue-500 ml-2 sm:ml-3">ME</span>
          </h2>
        </div>
      </Motion>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-6xl mx-auto">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-10
            lg:gap-16
            xl:gap-24
          "
        >
          {/* ================= PERSONAL INFO ================= */}
          <Motion
            animation="fadeLeft"
            duration={0.7}
            className="w-full lg:flex-1"
          >
            <div>
              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  mb-6
                  sm:mb-8
                "
              >
                PERSONAL INFOS
              </h3>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-1
                  xl:grid-cols-2
                  gap-6
                  xl:gap-12
                "
              >
                {/* LEFT INFO */}
                <div className="space-y-4">
                  <ul className="space-y-5">
                    {leftInfo.map((item, index) => (
                      <InfoItem key={index} item={item} index={index} />
                    ))}
                  </ul>
                </div>

                {/* RIGHT INFO */}
                <div className="space-y-4">
                  <ul className="space-y-5">
                    {rightInfo.map((item, index) => (
                      <InfoItem key={index} item={item} index={index + 5} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Motion>

          {/* ================= STAT CARD ================= */}
          <Motion
            animation="fadeRight"
            delay={0.2}
            duration={0.7}
            className="w-full lg:flex-1"
          >
            <StatCard />
          </Motion>
        </div>

        {/* ================= CV BUTTON ================= */}
        <Motion
          animation="fadeUp"
          delay={0.3}
          duration={0.6}
          className="mt-10 sm:mt-12"
        >
          <CVbtn />
        </Motion>
      </main>
    </section>
  );
};

export default About;
