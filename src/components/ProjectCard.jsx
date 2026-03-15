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
      <div className="relative aspect-16/10 overflow-hidden">
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
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg">{project.title}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
            className="size-5 text-muted transition-colors duration-200 group-hover:text-foreground"
          >
            <path d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4 59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24 8 8 0 0 0-6.93 4 59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24 40 40 0 0 0-40-40 8 8 0 0 0 0 16 24 24 0 0 1 24 24 40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32M200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48 8 8 0 0 0 1.1-7.69 43.8 43.8 0 0 1 .79-33.58 43.88 43.88 0 0 1 32.32 20.06 8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69 43.87 43.87 0 0 1 32.32-20.06 43.8 43.8 0 0 1 .77 33.58 8.09 8.09 0 0 0 1 7.65 41.7 41.7 0 0 1 7 22.52Z" />
          </svg>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
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
