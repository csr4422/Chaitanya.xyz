# Chaitanya Raut — Portfolio

A text-only, responsive portfolio built with semantic HTML, CSS, and GSAP. Professional background and LibreDesk contributions come from the supplied resume. Selected project descriptions are grounded in the public GitHub repositories and their implementations; see [content sources](CONTENT_SOURCES.md). No runtime services, external fonts, or CDN dependencies.

## Run locally

Requires Node.js 22 and Python 3.

```sh
npm ci
npm run dev
```

Open http://localhost:5173. The dev command builds first; after editing source files, run `npm run build` and refresh the browser.

## Build

```sh
npm run build
```

The build outputs the static site to `dist/`. All asset paths are relative, including the resume. GSAP and ScrollTrigger are bundled locally; content and navigation also work without JavaScript. Reduced-motion preferences disable animations and smooth scrolling.

## Deployment

Cloudflare Pages builds and deploys automatically through its GitHub repository connection. The build command is `npm run build` and the output directory is `dist/`.

## Edit

- `index.html`: content, links, metadata
- `styles.css`: layout, typography, responsive styles
- `script.js`: progressive GSAP reveals
- `assets/chaitanya-raut-resume.pdf`: original supplied resume
- `scripts/build.mjs`: static output and local animation assets

No images, analytics, tracking, or remote font requests are used.
