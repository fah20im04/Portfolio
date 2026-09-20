import React from "react";
import { motion } from "framer-motion";
import Motion from "../reusable/Motion";

const skillItems = [
  { name: "HTML", percentage: 89 },
  { name: "JAVASCRIPT", percentage: 69 },
  { name: "CSS", percentage: 70 },
  { name: "Next.js", percentage: 26 },
  { name: "TAILWIND", percentage: 95 },
  { name: "MongoDB", percentage: 50 },
  { name: "Node.js", percentage: 65 },
  { name: "REACT", percentage: 75 },
];

// --- Skill Circle ---
const SkillCircle = ({ name, percentage, index }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const strokeOffset =
    circumference - (circumference * percentage) / 100;

  return (
    <Motion
      animation="fadeUp"
      delay={index * 0.1}
      duration={0.6}
      className="flex flex-col items-center space-y-4"
    >
      <motion.div
        className="relative w-28 h-28"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.1,
          ease: "easeOut",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full -rotate-90"
        >
          {/* Background */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="10"
            fill="none"
            className="stroke-gray-700"
          />

          {/* Progress */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="stroke-blue-500"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            whileInView={{
              strokeDashoffset: strokeOffset,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.1 + 0.2,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 0.8,
            }}
          >
            {percentage}%
          </motion.span>
        </div>
      </motion.div>

      {/* Skill Name */}
      <p className="text-sm uppercase font-semibold tracking-wider text-white/80">
        {name}
      </p>
    </Motion>
  );
};

// --- Main MySkills Component ---
const MySkills = () => {
  return (
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-20">
      {/* Title */}
      <Motion
        animation="fadeUp"
        duration={0.7}
        className="relative text-center mb-16 pt-8"
      >
        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase flex items-center">
            <span className="text-white">MY</span>
            <span className="text-blue-500 ml-3">
              SKILLS
            </span>
          </h2>
        </div>
      </Motion>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-6 max-w-5xl mx-auto">
        {skillItems.map((skill, index) => (
          <SkillCircle
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default MySkills;