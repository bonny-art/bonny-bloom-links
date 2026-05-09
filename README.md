# Bonny Studio Links

Bonny Studio Links is a small Next.js link page for Bonny Studio, with separate link groups for Bonny Art and Bonny Bloom.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- lucide-react icons

## Project Structure

- `src/app/layout.tsx` - root app layout, fonts, and page metadata.
- `src/app/page.tsx` - main Bonny Studio links page.
- `src/app/[...slug]/page.tsx` - catch-all route for unknown paths.
- `src/app/globals.css` - global styles.
- `public/` - static images used by the page, including the avatar, logo, flags, and Open Graph image.
- Root config files - Next.js, TypeScript, Tailwind, PostCSS, and ESLint configuration.

## Routes

- `/` - main links page for Bonny Studio.
- `src/app/[...slug]/page.tsx` - redirects unknown paths back to `/`.

## Static Assets

Static assets live in `public/` and are referenced from the app with root-relative paths such as `/avatar.png`, `/logo.png`, `/ua-flag.png`, `/en-flag.png`, and `/opengraph-image.png`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
