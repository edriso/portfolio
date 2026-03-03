import profilePicture from '../assets/profile-picture.jpg';
import waveSvg from '../assets/wave.svg';

const skills = [
  'HTML',
  'CSS (SASS, TailwindCSS)',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js (Express)',
  'Alpine.js',
  'Vue.js',
  'PHP (Laravel)',
  'MySQL',
  'MongoDB',
  'React Query',
  'GraphQL',
  'RESTful APIs',
  'Shopify',
  'Magento',
  'Git',
  'CI/CD',
  'Docker',
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
          Hey <img src={waveSvg} alt="" className="inline-block w-8 h-8 wave" />
          , I&apos;m Mohamed Idris
        </h1>
        <p className="text-muted text-lg">Software Engineer</p>
      </div>

      {/* Bio */}
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed mb-12">
        <p>
          I&apos;m a software engineer who enjoys building web apps that solve
          real problems and are easy for people to use.
        </p>
        <p>
          I have a Bachelor&apos;s degree in Computer Science and completed the
          ITI web development bootcamp, which gave me hands-on experience
          building web apps with PHP and Node.js.
        </p>
        <p>
          Since then, I&apos;ve worked with frontend frameworks like React.js
          and Vue.js, backend tools like Node.js and Laravel, and databases like
          MySQL and MongoDB.
        </p>
        <p>
          Currently, I&apos;m working as a Web Developer at Scandiweb, building
          and maintaining e-commerce solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="w-full max-w-2xl">
        <h2 className="font-display text-2xl mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-full bg-surface border border-border text-muted transition-colors hover:border-primary hover:text-primary cursor-default"
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
