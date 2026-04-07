import profilePicture from '../assets/profile-picture.jpg';
import waveSvg from '../assets/wave.svg';

const skills = [
  // Languages
  'JavaScript',
  'TypeScript',
  'PHP',
  'HTML',
  'CSS',
  // Frontend
  'React',
  'Next.js',
  'Vue',
  'Alpine.js',
  'Tailwind CSS',
  'SASS',
  // Backend
  'Node.js',
  'Express.js',
  'Laravel',
  'Prisma',
  'GraphQL',
  'REST APIs',
  // Databases
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  // E-commerce
  'Shopify',
  'Magento 2',
  'Hyvä',
  // Bots
  'Grammy',
  'Discord.js',
  // Testing
  'Vitest',
  'Jest',
  // DevOps & Tools
  'Git',
  'Docker',
  'CI/CD',
  'Postman',
  'Jira',
];

function About() {
  return (
    <section className="flex flex-col items-center">
      {/* Hero */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary overflow-hidden mb-6">
          <img
            src={profilePicture}
            alt="Mohamed Idris"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-display text-3xl md:text-4xl mb-2">
          Hey{' '}
          <img
            src={waveSvg}
            alt=""
            aria-hidden="true"
            className="inline-block w-8 h-8 wave"
          />
          , I&apos;m Mohamed Idris
        </h1>
        <p className="text-muted text-lg">Software Engineer</p>
      </div>

      {/* Bio */}
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed mb-12">
        <p>
          I&apos;m a developer who enjoys building web apps that solve real
          problems and are easy for people to use.
        </p>
        <p>
          I&apos;ve worked across the full stack, from building frontend
          interfaces with React and Vue, to developing APIs and services with
          Node.js and Laravel, to building Telegram and Discord bots.
        </p>
        <p>
          I hold a Bachelor&apos;s degree in Computer Science and completed the
          ITI web development bootcamp, which helped me build a solid foundation
          early on.
        </p>
        <p>
          I enjoy working with teams where I can learn, contribute, and build
          things people actually use. That&apos;s the kind of work I want to
          keep doing.
        </p>
      </div>

      {/* Skills */}
      <div className="w-full max-w-2xl">
        <h2 className="font-display text-2xl mb-6 text-center">Skills</h2>
        <div className="dim-siblings flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted transition-all duration-300 hover:border-primary hover:text-primary cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
