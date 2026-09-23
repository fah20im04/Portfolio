import React from "react";

// --- Data Definition ---
const statItems = [
  { count: "1+", unit: "YEARS OF EXPERIENCE" },
  { count: "15+", unit: "COMPLETED PROJECTS" },
  { count: "+=", unit: "HAPPY CUSTOMERS" },
  { count: "+=", unit: "AWARDS WON" },
];

const StatCard = () => {
  const StatCard = ({ count, unit }) => (
    // Card container with dark background and subtle border
    <div
      className="
        relative 
        p-6 
        bg-gray-800 
        border 
        border-gray-700 
        rounded-lg 
        h-40 
        flex 
        flex-col 
        justify-center 
        items-start
        text-white
        transition 
        duration-300
        hover:border-blue-500
      "
    >
      {/* Statistic Count (The large number) */}
      <h3 className="text-5xl font-extrabold text-blue-500 mb-2 leading-none">
        {count}
      </h3>

      {/* Separator line */}
      <div className="w-8 h-0.5 bg-blue-500 mb-3"></div>

      {/* Description Unit */}
      <p
        className="
          text-sm 
          font-light 
          uppercase 
          tracking-wider 
          text-white/80
        "
      >
        {unit}
      </p>
    </div>
  );
  // ------------------------------------------------------------------------

  return (
    // Outer grid to arrange the four statistic cards
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-2">
      {statItems.map((item, index) => (
        <StatCard key={index} count={item.count} unit={item.unit} />
      ))}
    </div>
  );
};

export default StatCard;
