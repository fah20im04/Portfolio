import React from "react";
import Motion from "../reusable/Motion";
import { motion } from "framer-motion";

export const SkillCircle = ({ name, percentage, index }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const strokeOffset = circumference - (circumference * percentage) / 100;

  return (
    <Motion
      animation="fadeUp"
      delay={index * 0.1}
      duration={0.6}
      className="flex flex-col items-center space-y-4"
    >
      <Motion
        animation="fadeUp"
        delay={index * 0.1 + 0.2}
        duration={0.6}
        className="relative w-24 h-24"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
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
          <Motion
            as="circle"
            animation="fade"
            delay={index * 0.1 + 0.2}
            duration={1.2}
            once={true}
            amount={0.5}
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
      </Motion>

      {/* Skill Name */}
      <p className="text-sm uppercase font-semibold tracking-wider text-white/80">
        {name}
      </p>
    </Motion>
  );
};
