const images = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

function getImage(filename) {
  const match = Object.entries(images).find(([path]) =>
    path.endsWith(filename),
  );
  if (match) return match[1].default;

  const placeholder = Object.entries(images).find(([path]) =>
    path.endsWith('0-placeholder.jpg'),
  );
  return placeholder?.[1].default;
}

const projects = [
  {
    id: 17,
    title: 'Name It',
    url: 'https://github.com/edriso/name-it',
    img: getImage('name-it.png'),
    tags: ['React', 'Framer Motion'],
  },
  {
    id: 16,
    title: 'DevRef',
    url: 'https://github.com/edriso/dev-ref',
    img: getImage('dev-ref.png'),
    tags: ['React', 'JavaScript'],
  },
  {
    id: 15,
    title: 'Type Down',
    url: 'https://github.com/edriso/type-down',
    img: getImage('type-down.png'),
    tags: ['React', 'react-markdown'],
  },
  {
    id: 14,
    title: 'React Notes',
    url: 'https://github.com/edriso/react-course-notes',
    img: getImage('react-course-notes.png'),
    tags: ['React'],
  },
  {
    id: 13,
    title: 'Flyways',
    url: 'https://github.com/edriso/flyways',
    img: getImage('flyways.png'),
    tags: ['React', 'React Query', 'TanStack Router', 'shadcn', 'Recharts'],
  },
  {
    id: 12,
    title: 'Unsplash Images',
    url: 'https://github.com/edriso/react-unsplash-images',
    img: getImage('unsplash-images.png'),
    tags: ['React', 'React Query', 'Axios'],
  },
  {
    id: 11,
    title: 'Waddda',
    url: 'https://github.com/edriso/waddda',
    img: getImage('waddda.png'),
    tags: ['React', 'TypeScript', 'Laravel'],
  },
  {
    id: 10,
    title: 'One Lesson Up',
    url: 'https://github.com/edriso/one-lesson-up',
    img: getImage('one-lesson-up.png'),
    tags: ['Laravel', 'Vue.js'],
  },
  {
    id: 9,
    title: 'I forgot to say sorry',
    url: 'https://github.com/edriso/i-forgot-to-say-sorry',
    img: getImage('i-forgot-to-say-sorry.png'),
    tags: ['JavaScript', 'html-to-image'],
  },
  {
    id: 8,
    title: 'Grow and Let Go',
    url: 'https://github.com/edriso/grow-and-let-go',
    img: getImage('grow-and-let-go.png'),
    tags: ['JavaScript'],
  },
  {
    id: 7,
    title: 'Munajaa',
    url: 'https://github.com/edriso/munajaa',
    img: getImage('munajaa.png'),
    tags: ['JavaScript'],
  },
  {
    id: 6,
    title: 'Grateful Heart',
    url: 'https://github.com/edriso/grateful-heart',
    img: getImage('grateful-heart.png'),
    tags: ['JavaScript'],
  },
  {
    id: 5,
    title: 'Number Ninjas',
    url: 'https://github.com/edriso/number-ninjas',
    img: getImage('number-ninjas.png'),
    tags: ['React', 'i18n-react', 'JavaScript'],
  },
  {
    id: 4,
    title: 'Weather App',
    url: 'https://github.com/edriso/weatherapp',
    img: getImage('weather-app.png'),
    tags: ['Node', 'Express', 'EJS'],
  },
  {
    id: 3,
    title: 'Cup of That',
    url: 'https://github.com/edriso/cupofthat',
    img: getImage('cup-of-that.png'),
    tags: ['Vue'],
  },
  {
    id: 2,
    title: 'Fancy Quiz',
    url: 'https://github.com/edriso/fancy-quiz-app',
    img: getImage('fancy-quiz.png'),
    tags: ['Vue', 'Bootstrap Vue'],
  },
  {
    id: 1,
    title: 'Easybank',
    url: 'https://github.com/edriso/easybank',
    img: getImage('easybank.png'),
    tags: ['Frontend Mentor', 'SASS'],
  },
];

export default projects;
