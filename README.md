# Next G Solution

A minimal static website built with Astro for publishing and showcasing apps, games, and small software projects under Next G Solution.

The website originally existed for one extremely glamorous reason:
hosting an `app-ads.txt` file.

Everything else was added later.

Now it acts as:

- a lightweight landing page
- an apps showcase
- a central place for project links
- and a public home for released software

## Stack

- Astro
- TailwindCSS
- Static site generation
- Zero backend
- Minimal JavaScript

And yes, I am ashamed to admit it, but a large portion of this website was vibe coded using Antigravity CLI.

## Philosophy

This project intentionally avoids unnecessary complexity.

No database.
No authentication.
No dashboard.
No CMS.
No bloated frontend framework hydration.

Just static files, fast load times, and clean UI.

## Features

- Fully static Astro website
- Apps & games listing page
- Responsive layout
- SEO-friendly pages
- `app-ads.txt` hosting support
- Minimal client-side JavaScript
- Content collections for app data

## Project Structure

```text
/
├── public/
│   └── app-ads.txt
│
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
│
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Runs locally at:

```text
http://localhost:4321
```

## Production Build

Build the site:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Production files are generated inside:

```text
/dist
```

## Notes

This project is intentionally simple and probably overengineered for a site whose original purpose was literally just serving `app-ads.txt`.

But at least it loads fast.
