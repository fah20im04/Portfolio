import React from "react";

// --- Data Definition ---
const skillItems = [
  { name: "HTML", percentage: 89 },
  { name: "JAVASCRIPT", percentage: 69 },
  { name: "CSS", percentage: 70 },
  { name: "Next.js", percentage: 26 },
  { name: "TAILWIND", percentage: 95 },
  { name: "MongoDB", percentage: 50 },
  { name: "Node.js", percentage: 65 },
  { name: "REACT", percentage: 45 },
];

// --- Skill Circle Sub-component ---
// This uses a CSS-based approach to mimic the circular progress bar appearance.
const SkillCircle = ({ name, percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-28 h-28">
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
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            className="stroke-blue-500 transition-all duration-1000 ease-out"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeOffset,
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{percentage}%</span>
        </div>
      </div>

      <p className="text-sm uppercase font-semibold tracking-wider text-white/80">
        {name}
      </p>
    </div>
  );
};

// --- Main MySkills Component ---

const MySkills = () => {
  return (
    // Main container with dark background for the whole section
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-20">
      {/* Title section (Same style as ABOUT ME) */}
      <header className="relative text-center mb-16 pt-8">
        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase flex items-center">
            <span className="text-white">MY</span>
            <span className="text-blue-500 ml-3">SKILLS</span>
          </h2>
        </div>
      </header>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-12 gap-x-6 max-w-5xl mx-auto">
        {/* Mapping the internal data to render all skill circles */}
        {skillItems.map((skill, index) => (
          <SkillCircle
            key={index}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default MySkills;
