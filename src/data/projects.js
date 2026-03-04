const images = import.meta.glob('../assets/showcase/*.{png,jpg,jpeg,webp}', {
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
    id: 16,
    title: 'DevRef',
    demo: 'https://dev-ref.netlify.app',
    code: 'https://github.com/edriso/dev-ref',
    img: getImage('dev-ref.png'),
    tags: ['Claude', 'React', 'JavaScript'],
    date: 'Mar 2026',
  },
  {
    id: 15,
    title: 'Type Down',
    demo: 'https://type-down.netlify.app',
    code: 'https://github.com/edriso/type-down',
    img: getImage('type-down.png'),
    tags: ['Claude', 'React', 'react-markdown'],
    date: 'Mar 2026',
  },
  {
    id: 14,
    title: 'React Notes',
    demo: 'https://react-course-notes.netlify.app',
    code: 'https://github.com/edriso/react-course-notes',
    img: getImage('react-course-notes.png'),
    tags: ['Claude', 'React'],
    date: 'Feb 2026',
  },
  {
    id: 13,
    title: 'Flyways',
    demo: 'https://flyways-spotter.netlify.app',
    code: 'https://github.com/edriso/flyways',
    img: getImage('flyways.png'),
    tags: ['React', 'React Query', 'TanStack Router', 'shadcn', 'Recharts'],
    date: 'Jan 2026',
  },
  {
    id: 12,
    title: 'Unsplash Images',
    demo: 'https://roaring-panda-fa2d04.netlify.app',
    code: 'https://github.com/edriso/react-unsplash-images',
    img: getImage('unsplash-images.png'),
    tags: ['React', 'React Query', 'Axios'],
    date: 'Jan 2026',
  },
  {
    id: 11,
    title: 'Waddda',
    demo: 'https://youtu.be/GuwuUd3l59w',
    code: 'https://github.com/edriso/waddda',
    img: getImage('waddda.png'),
    tags: ['React', 'TypeScript', 'Laravel'],
    date: 'Nov 2025',
  },
  {
    id: 10,
    title: 'One Lesson Up',
    demo: 'https://onelessonup.com',
    code: 'https://github.com/edriso/one-lesson-up',
    img: getImage('one-lesson-up.png'),
    tags: ['Laravel', 'Vue.js'],
    date: 'Sep 2025',
  },
  {
    id: 9,
    title: 'I forgot to say sorry',
    demo: 'https://edriso.github.io/i-forgot-to-say-sorry',
    code: 'https://github.com/edriso/i-forgot-to-say-sorry',
    img: getImage('i-forgot-to-say-sorry.png'),
    tags: ['JavaScript', 'html-to-image'],
    date: 'Aug 2025',
  },
  {
    id: 8,
    title: 'Grow and Let Go',
    demo: 'https://edriso.github.io/grow-and-let-go',
    code: 'https://github.com/edriso/grow-and-let-go',
    img: getImage('grow-and-let-go.png'),
    tags: ['JavaScript', 'Cursor AI'],
    date: 'Aug 2025',
  },
  {
    id: 7,
    title: 'Munajaa',
    demo: 'https://edriso.github.io/munajaa',
    code: 'https://github.com/edriso/munajaa',
    img: getImage('munajaa.png'),
    tags: ['JavaScript', 'Cursor AI'],
    date: 'Aug 2025',
  },
  {
    id: 6,
    title: 'Grateful Heart',
    demo: 'https://edriso.github.io/grateful-heart',
    code: 'https://github.com/edriso/grateful-heart',
    img: getImage('grateful-heart.png'),
    tags: ['JavaScript', 'Cursor AI'],
    date: 'Jul 2025',
  },
  {
    id: 5,
    title: 'Number Ninjas',
    demo: 'https://number-little-ninjas.netlify.app',
    code: 'https://github.com/edriso/number-ninjas',
    img: getImage('number-ninjas.png'),
    tags: ['React', 'i18n-react', 'JavaScript'],
    date: 'Dec 2023',
  },
  {
    id: 4,
    title: 'Weather App',
    demo: 'https://weather-app-4q9w.onrender.com',
    code: 'https://github.com/edriso/weatherapp',
    img: getImage('weather-app.png'),
    tags: ['Node', 'Express', 'EJS'],
    date: 'Jul 2022',
  },
  {
    id: 3,
    title: 'Cup of That',
    demo: 'https://cupofthat-daily.web.app',
    code: 'https://github.com/edriso/cup-of-that',
    img: getImage('cup-of-that.png'),
    tags: ['Vue', 'SASS'],
    date: 'Apr 2021',
  },
  {
    id: 2,
    title: 'Fancy Quiz',
    demo: 'https://fancy-quiz-app.web.app',
    code: 'https://github.com/edriso/fancy-quiz-app',
    img: getImage('fancy-quiz.png'),
    tags: ['Vue', 'Bootstrap Vue'],
    date: 'Jan 2021',
  },
  {
    id: 1,
    title: 'Easybank',
    demo: 'https://edriso.github.io/easybank',
    code: 'https://github.com/edriso/easybank',
    img: getImage('easybank.png'),
    tags: ['Frontend Mentor', 'SASS'],
    date: 'Jan 2021',
  },
];

export default projects;
