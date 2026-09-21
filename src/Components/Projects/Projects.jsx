import React from "react";
import { projectItems } from "../../data/Project";
import { ProjectModal } from "./ProjectModal";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const productionProjects = projectItems.filter(
    (project) => project.featured
  );

  const otherProjects = projectItems.filter(
    (project) => !project.featured
  );

  return (
    <section className="bg-gray-900 text-white p-4 md:p-12 lg:p-20">

      {/* Title */}
      <header className="relative text-center mb-16 pt-8">
        <h1 className="text-8xl md:text-[10rem] font-extrabold text-white/5 uppercase tracking-widest leading-none">
          Works
        </h1>

        <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase flex items-center">
            <span className="text-white">MY</span>
            <span className="text-blue-500 ml-3">PROJECTS</span>
          </h2>
        </div>
      </header>

      {/* =========================
          PRODUCTION PROJECTS
      ========================== */}

      <div className="max-w-6xl mx-auto mb-20">

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
              Production Projects
            </h3>

            <span className="text-xs uppercase tracking-widest text-green-400 border border-green-500/30 px-3 py-1 rounded-full">
              Live
            </span>
          </div>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Production Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productionProjects.map((item) => (
            <ProjectCard
              key={item.id}
              category={item.category}
              title={item.title}
              imagePlaceholder={item.imagePlaceholder}
              onViewDetails={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>

      {/* =========================
          OTHER PROJECTS
      ========================== */}

      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/10" />

          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white/80">
            Other Projects
          </h3>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((item) => (
           <ProjectCard
                key={item.id}
                category={item.category}
                title={item.title}
                imagePlaceholder={item.imagePlaceholder}
                status={item.status}
                onViewDetails={() => setSelectedProject(item)}
            />
          ))}
        </div>
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