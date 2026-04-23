# Portfolio

Personal portfolio built with React 19, Tailwind CSS v4, and Vite.

## Pages

- **About** - Bio, profile photo, and skills
- **Projects** - Curated project cards fetched from Contentful (falls back to local data)
- **Kudos** - Testimonials and feedback from colleagues
- **Contact** - Email and social links

## Multi-Role About Page

The About page supports multiple role variants, so you can share a tailored version with different recruiters. The active role is driven by a `?r=` query param and persisted in `localStorage`.

| Param          | Role shown                     |
| -------------- | ------------------------------ |
| `?r=software`  | Software Engineer (default)    |
| `?r=fullstack` | Fullstack Engineer             |
| `?r=frontend`  | Frontend Developer             |
| `?r=php`       | PHP/Laravel Developer          |
| `?r=magento`   | E-commerce / Magento Developer |

**How it works:**
1. Visit `/?r=magento` — sets `localStorage` and shows the Magento variant.
2. Subsequent visits to `/` (no param) — reads `localStorage` and keeps showing Magento.
3. To switch roles, visit with the new param (e.g. `/?r=frontend`).
4. To reset to default, visit `/?r=software`.

**To add or edit a role**, update `src/data/about.js` — that's the single source of truth for all role titles, bios, and skills lists. No other files need changing.

## Tech Stack

- React 19 + React Router v7
- Tailwind CSS v4 (CSS-first config with `@theme inline`)
- Contentful CMS
- Vite 7
- ESLint + Prettier + cSpell

## Getting Started

```bash
npm install
cp .env.example .env  # fill in your Contentful credentials
npm run dev
```

## Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start dev server                 |
| `npm run build`        | Production build                 |
| `npm run preview`      | Preview production build         |
| `npm run lint`         | Run ESLint                       |
| `npm run format`       | Format code with Prettier        |
| `npm run format:check` | Check formatting                 |
