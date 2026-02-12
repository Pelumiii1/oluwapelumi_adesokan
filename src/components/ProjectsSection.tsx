import { ExternalLink, Github } from "lucide-react";
import { projects } from "../mock";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 overflow-hidden hover:border-black/20 transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-light text-black tracking-tight">
                    {project.title}
                  </h3>
                  {project.isLive === false && (
                    <span className="rounded-full border border-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-black/60">
                      Not Live
                    </span>
                  )}
                </div>
                <p className="text-sm text-black/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs text-black/50 border border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-black/20 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Live
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-black/20 text-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
