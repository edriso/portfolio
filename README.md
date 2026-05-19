# Portfolio

Personal portfolio built with React 19, Tailwind CSS v4, and Vite.

## Pages

- **About** - Bio, profile photo, and skills
- **Projects** - Curated project cards fetched from Contentful (falls back to local data)
- **Kudos** - Testimonials and feedback from colleagues
- **Contact** - Email and social links

## Multi-Role About Page

The About page supports multiple role variants, so you can share a tailored version with different recruiters. The active role is driven by a `?r=` query param and persisted in `localStorage`.

| Param          | Role shown                  |
| -------------- | --------------------------- |
| `?r=software`  | Software Engineer            |
| `?r=fullstack` | Fullstack Engineer (default) |
| `?r=frontend`  | Frontend Developer          |
| `?r=backend`   | Backend Developer           |
| `?r=php`       | PHP/Laravel Developer       |
| `?r=ecommerce` | E-commerce Developer        |

**How it works:**
1. Visit `/?r=ecommerce` — sets `localStorage` and shows the E-commerce variant.
2. Subsequent visits to `/` (no param) — reads `localStorage` and keeps showing that variant.
3. To switch roles, visit with the new param (e.g. `/?r=frontend`).
4. To reset to default, visit `/?r=fullstack`.

**To add or edit a role**, update `src/data/about.js` — that's the single source of truth for all role titles, bios, and skills lists. No other files need changing.

## ThoughtCloud

An animated thought bubble that appears above the profile photo with rotating messages. Built as a standalone component (`src/components/ThoughtCloud.jsx`) so it can be toggled without touching the page layout.

To show it, uncomment two lines in `src/pages/About.jsx`:

```jsx
import ThoughtCloud from '../components/ThoughtCloud';
// ...
<ThoughtCloud />
```

Messages and timing are configured via the constants at the top of the component file.

## Tech Stack

- React 19 + React Router v7
- Tailwind CSS v4 (CSS-first config with `@theme inline`)
- Contentful CMS
- Vite 7
- ESLint + Prettier + Husky + lint-staged

## Getting Started

```bash
npm install
cp .env.example .env  # fill in your Contentful credentials
npm run dev
```

> `npm install` automatically sets up the Husky pre-commit hook via the `prepare` script — no manual step needed.

## Pre-commit Hook

Husky runs lint-staged on every commit:

- **`src/**/*.{js,jsx}`** — `eslint --fix` (auto-fixes; blocks commit on unfixable errors)
- **`src/**/*.{css,json}`** — `prettier --write` (auto-formats)

## Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start dev server                         |
| `npm run build`        | Production build                         |
| `npm run preview`      | Preview production build                 |
| `npm run lint`         | Run ESLint across the whole project      |
| `npm run format`       | Format all src files with Prettier       |
| `npm run format:check` | Check formatting without writing         |
| `npm run prepare`      | Set up Husky hooks (runs on npm install) |
