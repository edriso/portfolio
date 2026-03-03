import { useState } from 'react';

function ProjectCard({ project }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className={`absolute inset-0 shimmer ${loaded ? 'hidden' : ''}`} />
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg">{project.title}</h3>
          <span className="text-xs text-muted">{project.date}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-background text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-foreground"
          >
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
