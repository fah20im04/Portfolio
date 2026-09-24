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
      className="relative pl-12 pb-8 border-l border-gray-700/50 last:pb-0"
    >
      {/* Icon Circle */}
      <Motion
        animation="scale"
        delay={index * 0.15 + 0.15}
        duration={0.4}
        className="
          absolute -left-5 top-0
          w-10 h-10
          rounded-full
          bg-blue-500
          flex items-center
          justify-center
          shadow-lg
          shadow-blue-500/30
        "
      >
        <Icon className="text-white text-lg" />
      </Motion>

      {/* Item Content */}
      <div className="bg-gray-800 p-6 rounded-lg transition duration-300 hover:bg-gray-700/50">
        {/* Year Badge */}
        <span
          className="
            inline-block
            px-3 py-1
            text-xs
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
        <h4 className="text-xl font-bold uppercase text-white mb-2">
          {title} —{" "}
          <span className="text-white/70 font-semibold">{company}</span>
        </h4>

        {/* Description */}
        <p className="text-sm font-light text-white/80 leading-relaxed">
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
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-14">
      {/* Title */}
      <Motion
        animation="fadeUp"
        duration={0.7}
        className="relative text-center mb-16 pt-8"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase flex items-center whitespace-nowrap">
            <span className="text-white">EXPERIENCE</span>
            <span className="text-blue-500 ml-3">& EDUCATION</span>
          </h2>
        </div>
      </Motion>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
        {/* Experience */}
        <div>
          <Motion
            animation="fadeLeft"
            duration={0.6}
            className="text-3xl font-bold text-white mb-8 border-b border-blue-500 pb-2 hidden lg:block"
          >
            Experience
          </Motion>

          <div className="space-y-12">
            {experienceItems.map((item, index) => (
              <TimelineItem key={index} {...item} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <Motion
            animation="fadeRight"
            duration={0.6}
            className="text-3xl font-bold text-white mb-8 border-b border-blue-500 pb-2 mt-16 lg:mt-0 hidden lg:block"
          >
            Education
          </Motion>

          <div className="space-y-12">
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
