# Portfolio

Personal portfolio built with React 19, Tailwind CSS v4, and Vite.

## Pages

- **About** - Bio, profile photo, and skills
- **Projects** - Curated project cards fetched from Contentful (falls back to local data)
- **Kudos** - Testimonials and feedback from colleagues
- **Contact** - Email and social links

## Tech Stack

- React 19 + React Router v7
- Tailwind CSS v4 (CSS-first config with `@theme inline`)
- Contentful CMS
- Vite 7
- ESLint + Prettier

## Getting Started

```bash
npm install
cp .env.example .env  # fill in your Contentful credentials
npm run dev
```

## Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `npm run dev`        | Start dev server                |
| `npm run build`      | Production build                |
| `npm run preview`    | Preview production build        |
| `npm run lint`       | Run ESLint                      |
| `npm run format`     | Format code with Prettier       |
| `npm run format:check` | Check formatting              |
