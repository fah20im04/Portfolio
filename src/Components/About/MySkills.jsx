import React from "react";
import { motion } from "framer-motion";
import Motion from "../reusable/Motion";
import { skillItems } from "../../data/Skill";
import { SkillCircle } from "./SkillCircle";

<SkillCircle />;

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
            <span className="text-blue-500 ml-3">SKILLS</span>
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
