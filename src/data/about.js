export const ROLES = {
  software: {
    title: 'Software Engineer',
    bio: [
      "I'm a developer who enjoys building web apps that solve real problems and are easy for people to use.",
      "I've worked across the full stack, from building frontend interfaces with React and Vue, to developing APIs and services with Node.js and Laravel, to building Telegram and Discord bots.",
      "I hold a Bachelor's degree in Computer Science and completed the ITI web development bootcamp, which helped me build a solid foundation early on.",
      "I enjoy working with teams where I can learn, contribute, and build things people actually use. That's the kind of work I want to keep doing.",
    ],
    skills: [
      // Languages
      'JavaScript',
      'TypeScript',
      'PHP',
      'HTML',
      'CSS',
      // Frontend
      'React',
      'Redux',
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
      'Redis',
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
    ],
  },

  fullstack: {
    title: 'Fullstack Engineer',
    bio: [
      "I'm a fullstack engineer who enjoys building complete web applications, from the UI down to the API and database.",
      'I work across the stack using React, Next.js, Node.js, Laravel, and TypeScript, building both the interfaces people interact with and the services that power them.',
      "I hold a Bachelor's degree in Computer Science and completed the ITI web development bootcamp, which helped me build a solid foundation early on.",
      'I enjoy working on products end-to-end with teams that care about quality and ship things people actually use.',
    ],
    skills: [
      // Languages
      'JavaScript',
      'TypeScript',
      'PHP',
      'HTML',
      'CSS',
      // Frontend
      'React',
      'Redux',
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
      'Redis',
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
    ],
  },

  frontend: {
    title: 'Frontend Developer',
    bio: [
      "I'm a frontend developer focused on building fast, accessible, and polished user interfaces.",
      'I specialize in React and Vue, working with modern tooling like Next.js, Tailwind CSS, and TypeScript to deliver clean component architectures and smooth user experiences.',
      "I hold a Bachelor's degree in Computer Science and completed the ITI web development bootcamp, which gave me a strong foundation in frontend fundamentals.",
      'I enjoy collaborating with designers and backend developers to ship interfaces that people actually enjoy using.',
    ],
    skills: [
      // Languages
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      // Frameworks & Libraries
      'React',
      'Redux',
      'Next.js',
      'Vue',
      'Alpine.js',
      'Tailwind CSS',
      'SASS',
      // APIs
      'GraphQL',
      'REST APIs',
      // Testing
      'Vitest',
      'Jest',
      // Tools
      'Git',
      'Postman',
    ],
  },

  php: {
    title: 'PHP/Laravel Developer',
    bio: [
      "I'm a backend developer with a focus on PHP and Laravel, building robust APIs and web applications.",
      "I've built RESTful APIs, handled authentication, queue systems, and data modeling with Laravel on top of MySQL and PostgreSQL. I also work with Node.js for services that benefit from a JavaScript runtime.",
      "I hold a Bachelor's degree in Computer Science and completed the ITI web development bootcamp, which helped me build a solid foundation early on.",
      'I care about clean code, good architecture, and building systems that are maintainable and reliable long-term.',
    ],
    skills: [
      // Languages
      'PHP',
      'JavaScript',
      'TypeScript',
      // Backend
      'Laravel',
      'Node.js',
      'Express.js',
      'Prisma',
      'REST APIs',
      'GraphQL',
      // Databases
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      // Testing
      'Vitest',
      'Jest',
      // DevOps & Tools
      'Git',
      'Docker',
      'CI/CD',
      'Postman',
      'Jira',
    ],
  },

  magento: {
    title: 'E-commerce Developer',
    bio: [
      "I'm an e-commerce developer specializing in Magento 2 and Hyvä Theme, with hands-on experience building and optimizing B2C & B2B platforms from the ground up.",
      "At Scandiweb I delivered multiple client projects on Magento 2 and Shopify, implementing custom modules, third-party integrations, and performance optimizations, including an open-source Hyvä theme. I'm comfortable owning the full lifecycle: backend PHP development, frontend with React/Alpine.js, cloud infrastructure on GCP, and Cloudflare configuration for CDN, caching, and WAF.",
      "I hold a Bachelor's degree in Computer Science and completed the ITI web development bootcamp, which helped me build a solid foundation early on.",
      'I care about security, reliability, and clean architecture. I enjoy taking full ownership of a platform and making it scale.',
    ],
    skills: [
      // E-commerce
      'Magento 2',
      'Hyvä',
      'Shopify',
      // Languages
      'PHP',
      'JavaScript',
      'TypeScript',
      // Frontend
      'React',
      'Vue',
      'Alpine.js',
      'Tailwind CSS',
      // Backend
      'Laravel',
      'Node.js',
      'REST APIs',
      'GraphQL',
      // Databases
      'MySQL',
      'PostgreSQL',
      // Infrastructure & Security
      'GCP',
      'Cloudflare',
      'Linux/Unix',
      'Nginx',
      // DevOps & Tools
      'Git',
      'Docker',
      'CI/CD',
    ],
  },
};

export const VALID_ROLES = Object.keys(ROLES);
export const DEFAULT_ROLE = 'software';
