import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Showcase() {
  return (
    <section>
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl md:text-4xl mb-3">Showcase</h1>
        <p className="text-muted max-w-xl mx-auto">
          A curated collection of projects I&apos;ve built — from full-stack
          apps to frontend experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Showcase;
