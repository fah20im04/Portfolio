import React from "react";
import { FaSearchPlus } from "react-icons/fa";

export const ProjectCard = ({
  category,
  title,
  imagePlaceholder,
  status,
  onViewDetails,
}) => {
  const isImageSrc = !imagePlaceholder.startsWith("bg-");

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transition duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      
      {/* Live Badge */}
      {status === "Live" && (
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-green-500/30">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

          <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
            Live
          </span>
        </div>
      )}

      {/* Project Image */}
      {isImageSrc ? (
        <img
          src={imagePlaceholder}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div
          className={`w-full h-48 ${imagePlaceholder} flex items-center justify-center`}
        >
          <span className="text-white/30 text-2xl font-semibold">
            Project Image
          </span>
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
        
        {/* Category */}
        <span className="text-white text-xs uppercase tracking-widest mb-2 border-b border-white/50 pb-1">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          {title}
        </h3>

        {/* View Details */}
        <div className="flex space-x-4">
          <button
            onClick={onViewDetails}
            title="View Details"
            className="p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition duration-200"
          >
            <FaSearchPlus className="text-xl" />
          </button>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="p-4">
        <span className="text-blue-500 text-sm font-semibold uppercase">
          {category}
        </span>

        <h4 className="text-lg font-bold text-white truncate">
          {title}
        </h4>
      </div>
    </div>
  );
};