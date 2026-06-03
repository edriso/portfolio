/**
 * App configuration, read from environment variables in one place.
 *
 * Vite only exposes variables prefixed with `VITE_` to the client, and they
 * always arrive as strings, so we normalise them here once.
 */

/**
 * Where the app gets its content (the Projects list today, and any other
 * Contentful-backed section later):
 *   'local'      → the hand-curated files in `src/data/` (default)
 *   'contentful' → the Contentful CMS (needs the VITE_CONTENTFUL_* variables)
 *
 * Switch it by setting `VITE_DATA_SOURCE` in your `.env`, or change the
 * fallback below. Anything other than 'contentful' counts as 'local'. If
 * 'contentful' is chosen but the credentials are missing or a request fails,
 * the app falls back to local data, so a section is never empty.
 */
export const DATA_SOURCE =
  import.meta.env.VITE_DATA_SOURCE === 'contentful' ? 'contentful' : 'local';
