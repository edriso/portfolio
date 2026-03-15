import { useFetchProjects } from '../hooks/useFetchProjects';
import ProjectCard from '../components/ProjectCard';

function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-surface border border-border">
      <div className="aspect-16/10 shimmer" />
      <div className="flex flex-col flex-1 p-4">
        <div className="h-5 w-1/2 rounded shimmer mb-2" />
        <div className="flex gap-1.5 mt-auto">
          <div className="h-5 w-14 rounded-full shimmer" />
          <div className="h-5 w-18 rounded-full shimmer" />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const { loading, projects } = useFetchProjects();

  return (
    <section>
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl md:text-4xl mb-3">Projects</h1>
        <p className="text-muted max-w-xl mx-auto">
          Some of the projects I&apos;ve built over the years.
        </p>
      </div>

      <div className="dim-siblings grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }, (_, i) => <ProjectCardSkeleton key={i} />)
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </section>
  );
}

export default Projects;
