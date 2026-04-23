import profilePicture from '../assets/profile-picture.jpg';
import waveSvg from '../assets/wave.svg';
import { useRole } from '../hooks/useRole';
import { ROLES } from '../data/about';

function About() {
  const role = useRole();
  const { title, bio, skills } = ROLES[role];

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
        <p className="text-muted text-lg">{title}</p>
      </div>

      {/* Bio */}
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed mb-12">
        {bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
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
