import React from "react";

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl w-[90%] md:w-[600px] p-6 relative animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={project.imagePlaceholder}
          alt={project.title}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        {/* Content */}
        <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
        <p className="text-blue-400 text-sm mb-3">{project.category}</p>

        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Live Link */}
        <div className="space-x-4">
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Visit Live Site
            </a>
          )}
          {project.gitrepo && (
            <a
              href={project.gitrepo}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Visit Github repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
