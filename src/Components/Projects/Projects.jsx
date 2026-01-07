import React from "react";
import { FaExternalLinkAlt, FaSearchPlus } from "react-icons/fa";
import travelease from "../../assets/travelease.png";
import hero from "../../assets/hero.png";
import civicconnect from "../../assets/civic.png";
import toytopia from "../../assets/toytopia.png";
// --- Data Definition ---
const projectItems = [
  {
    id: 1,
    category: "Car Rental",
    title: "Travelease",
    imagePlaceholder: travelease,
    livelink: "https://lighthearted-madeleine-ec839c.netlify.app/",
    description:
      "A full-featured car rental web app with authentication, booking system and admin panel.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
    gitrepo: "https://github.com/fah20im04/TravelEase",
  },
  {
    id: 2,
    category: "React JS",
    title: "Website Concept",
    imagePlaceholder: hero,
    livelink: "https://heroappfahim-dasik-7da5e8.netlify.app/",
    description:
      "Modern hero section design with animations and responsive layout.",
    tech: ["React", "Tailwind", "daisyUI", "firebase"],
    gitrepo: "https://github.com/fah20im04/Hero-App",
  },
  {
    id: 3,
    category: "MERN STACK",
    title: "Social Civic Connect",
    imagePlaceholder: civicconnect,
    livelink: "https://civicconnects-fahim-86f63a.netlify.app/",
    description:
      "A civic issue reporting platform with user roles and real-time updates.",
    tech: ["MERN", "JWT", "Stripe"],
    gitrepo: "https://github.com/fah20im04/Civic-Connect",
  },
  {
    id: 4,
    category: "Toy Store",
    title: "Toytopia Collection",
    imagePlaceholder: toytopia,
    livelink: "https://toytopiafahim-rabanadas-5e221e.netlify.app/",
    description:
      "E-commerce toy store with cart, filters and payment integration.",
    tech: ["React", "Firebase", "Stripe", "MongoDB"],
  },
];

// --- Project Card Sub-component ---
const ProjectCard = ({ category, title, imagePlaceholder, onViewDetails }) => {
  const isImageSrc = !imagePlaceholder.startsWith("bg-");

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transition duration-300 hover:shadow-xl hover:shadow-blue-500/10">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
        <span className="text-white text-xs uppercase tracking-widest mb-2 border-b border-white/50 pb-1">
          {category}
        </span>

        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          {title}
        </h3>

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
        <h4 className="text-lg font-bold text-white truncate">{title}</h4>
      </div>
    </div>
  );
};

// project modal

const ProjectModal = ({ project, onClose }) => {
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

// --- Main Projects Component ---
const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-20">
      {/* Title */}
      <header className="relative text-center mb-16 pt-8">
        <h1 className="text-8xl md:text-[10rem] font-extrabold text-white/5 uppercase tracking-widest leading-none">
          Works
        </h1>
        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase flex items-center">
            <span className="text-white">MY</span>
            <span className="text-blue-500 ml-3">PORTFOLIO</span>
          </h2>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectItems.map((item) => (
          <ProjectCard
            key={item.id}
            category={item.category}
            title={item.title}
            imagePlaceholder={item.imagePlaceholder}
            onViewDetails={() => setSelectedProject(item)}
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
