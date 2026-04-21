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
  'Magento 2',
  'Hyvä',
  'Shopify',
  // Bots
  'Grammy',
  'Discord.js',
  // Testing
  'Vitest',
  'Jest',
  // Infrastructure & Security
  'GCP',
  'Cloudflare',
  'Linux/Unix',
  'Nginx',
  'Docker',
  // DevOps & Tools
  'Git',
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
        <p className="text-muted text-lg">E-commerce Developer</p>
      </div>

      {/* Bio */}
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed mb-12">
        <p>
          I&apos;m an e-commerce developer specializing in Magento 2 and
          Hyvä Theme, with hands-on experience building and optimizing
          B2C &amp; B2B platforms from the ground up.
        </p>
        <p>
          At Scandiweb I delivered multiple client projects on Magento 2 and
          Shopify, implementing custom modules, third-party integrations, and
          performance optimizations, including an open-source Hyvä theme. I&apos;m
          comfortable owning the full lifecycle: backend PHP development, frontend
          with React/Alpine.js, cloud infrastructure on GCP, and Cloudflare
          configuration for CDN, caching, and WAF.
        </p>
        <p>
          I hold a Bachelor&apos;s degree in Computer Science and completed the
          ITI web development bootcamp, which helped me build a solid foundation
          early on.
        </p>
        <p>
          I care about security, reliability, and clean architecture. I enjoy
          taking full ownership of a platform and making it scale.
        </p>
      </div>

      {/* Skills */}
      <div className="w-full max-w-2xl">
        <h2 className="font-display text-2xl mb-6 text-center">Skills</h2>
        <div className="dim-cards flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="dim-card px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted transition-all duration-300 hover:border-primary hover:text-primary cursor-default"
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
