const images = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

export const placeholderImg = Object.entries(images).find(([path]) =>
  path.endsWith('0-placeholder.jpg'),
)?.[1].default;

function getImage(filename) {
  const match = Object.entries(images).find(([path]) =>
    path.endsWith(filename),
  );
  return match ? match[1].default : placeholderImg;
}

const projects = [
  {
    id: 7,
    title: 'Hub',
    url: 'https://edriso.github.io/hub/',
    img: getImage('hub.png'),
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    title: 'NumNinjas',
    url: 'https://github.com/edriso/num-ninjas',
    img: getImage('numninjas.png'),
    tags: ['TypeScript', 'Grammy', 'Next.js', 'Prisma', 'MySQL'],
  },
  {
    id: 5,
    title: 'Flyways',
    url: 'https://github.com/edriso/flyways',
    img: getImage('flyways.png'),
    tags: ['React', 'React Query', 'TanStack Router', 'shadcn/ui', 'Recharts'],
  },
  {
    id: 4,
    title: 'Unsplash Images',
    url: 'https://github.com/edriso/react-unsplash-images',
    img: getImage('unsplash-images.png'),
    tags: ['React', 'React Query', 'Axios'],
  },
  {
    id: 3,
    title: 'Waddda',
    url: 'https://github.com/edriso/waddda',
    img: getImage('waddda.png'),
    tags: ['React', 'TypeScript', 'Laravel'],
  },
  {
    id: 2,
    title: 'One Lesson Up',
    url: 'https://github.com/edriso/one-lesson-up',
    img: getImage('one-lesson-up.png'),
    tags: ['Laravel', 'Vue'],
  },
  {
    id: 1,
    title: 'Weather App',
    url: 'https://github.com/edriso/weatherapp',
    img: getImage('weather-app.png'),
    tags: ['Node.js', 'Express', 'EJS'],
  },
];

export default projects;
