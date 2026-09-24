import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Motion from "../reusable/Motion";
import { timelineItems } from "../../data/Skill";

// --- Timeline Item ---
const TimelineItem = ({ year, title, company, description, type, index }) => {
  const Icon = type === "experience" ? FaBriefcase : FaGraduationCap;

  return (
    <Motion
      animation="fadeUp"
      delay={index * 0.15}
      duration={0.6}
      className="
        relative
        pl-9
        sm:pl-12
        pb-8
        sm:pb-10
        border-l
        border-gray-700/50
        last:pb-0
      "
    >
      {/* Icon Circle */}
      <Motion
        animation="scale"
        delay={index * 0.15 + 0.15}
        duration={0.4}
        className="
          absolute
          -left-4
          sm:-left-5
          top-0
          w-8
          h-8
          sm:w-10
          sm:h-10
          rounded-full
          bg-blue-500
          flex
          items-center
          justify-center
          shadow-lg
          shadow-blue-500/30
        "
      >
        <Icon className="text-white text-sm sm:text-lg" />
      </Motion>

      {/* Item Content */}
      <div
        className="
          bg-gray-800
          p-4
          sm:p-5
          md:p-6
          rounded-lg
          transition
          duration-300
          hover:bg-gray-700/50
        "
      >
        {/* Year Badge */}
        <span
          className="
            inline-block
            px-3
            py-1
            text-[10px]
            sm:text-xs
            font-semibold
            uppercase
            tracking-wider
            bg-gray-900
            text-white/70
            rounded-full
            mb-3
          "
        >
          {year}
        </span>

        {/* Title and Company */}
        <h4
          className="
            text-base
            sm:text-lg
            md:text-xl
            font-bold
            uppercase
            text-white
            mb-2
            leading-snug
          "
        >
          {title} —{" "}
          <span className="text-white/70 font-semibold">{company}</span>
        </h4>

        {/* Description */}
        <p
          className="
            text-xs
            sm:text-sm
            font-light
            text-white/80
            leading-relaxed
          "
        >
          {description}
        </p>
      </div>
    </Motion>
  );
};

// --- Main Component ---
const ExperienceEducation = () => {
  const experienceItems = timelineItems.filter(
    (item) => item.type === "experience",
  );

  const educationItems = timelineItems.filter(
    (item) => item.type === "education",
  );

  return (
    <section
      className="
        bg-gray-900
        text-white
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        py-12
        sm:py-16
        md:py-20
        overflow-hidden
      "
    >
      {/* ================= TITLE ================= */}
      <Motion
        animation="fadeUp"
        duration={0.7}
        className="
          relative
          text-center
          mb-12
          sm:mb-16
          md:mb-20
          pt-4
          sm:pt-8
        "
      >
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-full
            px-2
          "
        >
          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-extrabold
              uppercase
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              leading-tight
            "
          >
            <span className="text-white">EXPERIENCE</span>

            <span className="text-blue-500 sm:ml-3">& EDUCATION</span>
          </h2>
        </div>
      </Motion>

      {/* ================= TIMELINE GRID ================= */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-x-12
          lg:gap-y-16
          max-w-6xl
          mx-auto
        "
      >
        {/* ================= EXPERIENCE ================= */}
        <div>
          <Motion
            animation="fadeLeft"
            duration={0.6}
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
              mb-8
              border-b
              border-blue-500
              pb-2
              hidden
              lg:block
            "
          >
            Experience
          </Motion>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {experienceItems.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div>
          <Motion
            animation="fadeRight"
            duration={0.6}
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
              mb-8
              border-b
              border-blue-500
              pb-2
              hidden
              lg:block
            "
          >
            Education
          </Motion>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {educationItems.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
