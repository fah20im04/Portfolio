import React from "react";
import { motion } from "framer-motion";
import fahim from "../../assets/fahim.png";
import Navbar from "./Navbar/Navbar";
import Motion from "../reusable/Motion.jsx";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >
      {/* ================= GLASS BACKGROUND ================= */}

      {/* Soft white glass glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-96
          h-96
          rounded-full
          bg-white/[0.035]
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -right-40
          w-96
          h-96
          rounded-full
          bg-white/[0.025]
          blur-3xl
          pointer-events-none
        "
      />

      {/* Subtle center glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-white/[0.015]
          blur-3xl
          pointer-events-none
        "
      />

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          py-16
          sm:py-20
          md:py-24
          lg:py-28
          flex
          flex-col
          md:flex-row
          items-center
          gap-10
          sm:gap-12
          lg:gap-16
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
              relative
              p-2
              rounded-[2rem]
              bg-white/[0.055]
              backdrop-blur-2xl
              border
              border-white/[0.12]
              shadow-[0_25px_60px_rgba(0,0,0,0.45)]
              w-[220px]
              sm:w-[270px]
              md:w-[300px]
              lg:w-[340px]
              xl:w-[360px]
            "
          >
            {/* Glass highlight */}
            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-2/3
                h-px
                bg-white/30
                blur-sm
              "
            />

            <img
              src={fahim}
              alt="Fahim Ahmed"
              className="
                relative
                w-full
                h-[280px]
                sm:h-[340px]
                md:h-[380px]
                lg:h-[430px]
                xl:h-[450px]
                object-cover
                rounded-[1.5rem]
                opacity-95
              "
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
                text-white
                leading-tight
              "
            >
              -I'M Fahim Ahmed
            </h1>
          </Motion>

          {/* Small glass line */}
          <Motion animation="fadeLeft" delay={0.1} duration={0.6}>
            <div
              className="
                mx-auto
                md:mx-0
                w-16
                h-1
                rounded-full
                bg-white/30
              "
            />
          </Motion>

          {/* Job Title */}
          <Motion animation="fadeLeft" delay={0.15} duration={0.7}>
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-white/90
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
                text-white/55
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
            <motion.div
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                sm:gap-4
                px-5
                sm:px-6
                py-2.5
                sm:py-3
                rounded-full
                bg-white/[0.06]
                backdrop-blur-xl
                border
                border-white/[0.15]
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                text-white
                font-semibold
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
                  bg-white/[0.1]
                  border
                  border-white/[0.15]
                  text-white
                  flex
                  items-center
                  justify-center
                  group-hover:translate-x-1
                  transition
                "
              >
                <FaArrowDown className="text-sm sm:text-base" />
              </span>
            </motion.div>
          </Motion>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <Navbar />
    </section>
  );
};

export default Home;
