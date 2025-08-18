import { Project } from "../types/Project.types";

const ProjectCard = (project: Project) => {
  return (
    <article className="group h-full overflow-hidden rounded-xl bg-surface ring-1 ring-black/5 shadow-soft transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 relative">
      {/* Gradient accent border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="h-40 w-full overflow-hidden bg-muted relative">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-[#4a4a4a] leading-relaxed flex-1">
          {project.shortDescrption}
        </p>
        {project.projectLink && (
          <a
            className="mt-2 inline-flex items-center text-sm font-semibold text-secondary hover:text-primary transition-colors duration-300 group/link"
            href={project.projectLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="group-hover/link:translate-x-1 transition-transform duration-300">
              View demo →
            </span>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
