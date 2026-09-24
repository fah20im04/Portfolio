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
        <li
          className="
            flex
            items-start
            sm:items-center
            p-3
            sm:p-3.5
            rounded-xl
            bg-white/[0.035]
            backdrop-blur-lg
            border
            border-white/[0.08]
            hover:bg-white/[0.07]
            hover:border-white/[0.15]
            transition-all
            duration-300
          "
        >
          {/* Check Icon */}
          <FaCheckCircle
            className="
              text-white/60
              mr-2
              mt-1
              sm:mt-0
              shrink-0
            "
          />

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:space-x-2
              min-w-0
            "
          >
            <span className="text-white/50">{item.label}</span>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-bold
                  text-white/90
                  hover:text-white
                  transition
                  break-all
                "
              >
                {item.value}
              </a>
            ) : (
              <span
                className={`
                  font-bold
                  ${item.className || "text-white/90"}
                `}
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
    <section
      className="
        relative
        min-h-screen
        w-full
        bg-[#080808]
        text-white
        px-4
        sm:px-6
        md:px-10
        lg:px-12
        py-12
        sm:py-16
        md:py-20
        overflow-hidden
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-white/[0.025]
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-white/[0.02]
          blur-3xl
          pointer-events-none
        "
      />

      {/* ================= TITLE ================= */}

      <Motion
        animation="fadeUp"
        duration={0.7}
        className="
          relative
          z-10
          text-center
          mb-10
          sm:mb-14
          md:mb-16
          pt-4
          sm:pt-8
        "
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
            text-white/[0.035]
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

            <span className="text-white/40 ml-2 sm:ml-3">ME</span>
          </h2>
        </div>
      </Motion>

      {/* ================= MAIN CONTENT ================= */}

      <main className="relative z-10 max-w-6xl mx-auto">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-8
            lg:gap-10
            xl:gap-14
          "
        >
          {/* ================= PERSONAL INFO ================= */}

          <Motion
            animation="fadeLeft"
            duration={0.7}
            className="w-full lg:flex-1"
          >
            <div
              className="
                relative
                p-5
                sm:p-6
                md:p-8
                rounded-3xl
                bg-white/[0.045]
                backdrop-blur-2xl
                border
                border-white/[0.1]
                shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                overflow-hidden
              "
            >
              {/* Glass highlight */}
              <div
                className="
                  absolute
                  top-0
                  left-8
                  right-8
                  h-px
                  bg-white/20
                  blur-sm
                "
              />

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  mb-6
                  sm:mb-8
                  text-white/90
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
                  gap-3
                  sm:gap-4
                "
              >
                {/* LEFT INFO */}
                <div>
                  <ul className="space-y-3">
                    {leftInfo.map((item, index) => (
                      <InfoItem key={index} item={item} index={index} />
                    ))}
                  </ul>
                </div>

                {/* RIGHT INFO */}
                <div>
                  <ul className="space-y-3">
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
            <div
              className="
                relative
                h-full
                p-5
                sm:p-6
                md:p-8
                rounded-3xl
                bg-white/[0.045]
                backdrop-blur-2xl
                border
                border-white/[0.1]
                shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                overflow-hidden
              "
            >
              {/* Glass highlight */}
              <div
                className="
                  absolute
                  top-0
                  left-8
                  right-8
                  h-px
                  bg-white/20
                  blur-sm
                "
              />

              <StatCard />
            </div>
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
