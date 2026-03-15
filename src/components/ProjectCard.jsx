import { useState } from 'react';

function ProjectCard({ project }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className={`absolute inset-0 shimmer ${loaded ? 'hidden' : ''}`} />
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-display text-lg mb-2">{project.title}</h3>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-background text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
