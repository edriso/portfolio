import { useState } from 'react';
import contactImg from '../assets/contact.jpg';
import callSvg from '../assets/call.svg';

function Contact() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-4xl mx-auto">
        {/* Image */}
        <div className="relative w-64 md:w-80 shrink-0">
          <div
            className={`absolute inset-0 rounded-2xl shimmer ${loaded ? 'hidden' : ''}`}
          />
          <img
            src={contactImg}
            alt="Contact"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full rounded-2xl transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="font-display text-3xl md:text-4xl mb-4">
            Get in Touch{' '}
            <img src={callSvg} alt="" className="inline-block w-8 h-8 wave" />
          </h1>

          <p className="text-muted mb-2">
            Thanks for checking out my portfolio!
          </p>
          <p className="text-muted mb-6">
            If you would like for us to work together, please don&apos;t
            hesitate to contact me.
          </p>

          <a
            href="mailto:edriso.dev@gmail.com"
            className="inline-block px-6 py-2.5 rounded-full bg-primary text-surface font-medium text-sm hover:opacity-90 transition-opacity"
          >
            edriso.dev@gmail.com
          </a>

          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a
              href="https://github.com/edriso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/edriso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://edriso.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
