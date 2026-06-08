# Bit by Bit Coding Website

Official website for Bit by Bit Coding, built with React + TypeScript + Vite + Tailwind CSS.

## Main domain and GitHub Pages behavior

- Main domain: `https://bbbcoding.vercel.app`
- Legacy GitHub Pages domain: `https://bitbybitcoding.github.io`
- Direct path visits on the Vercel domain also normalize to hash routes so the HashRouter always resolves the correct page.

## Development

```bash
npm ci
npm run dev
```

Build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Current pages

- Home
- Pathways
- Application
- Tutor
- Partners
- Team
- Impact
- Press / Media Kit
- Gallery
- Blog + blog post pages
- Contact
- FAQ
- Privacy / Terms / Conduct / Consent / Child Policy

## Notable features

- Global favicon set to `.github/assets/logo.png`
- Partner logo moving wall on home page (grayscale carousel)
- Home impact section with milestones and metrics
- Home testimonials section
- Dedicated Team page
- Press/Media Kit page with brand colours, fonts, and logo asset
- Pinterest-style event gallery
- Blog search + tag filtering
- Global site search from the navbar (searches across all pages)
- Application page uses the Term 2 Tally registration embed
- SEO metadata (OpenGraph/Twitter) and `robots.txt` + `sitemap.xml`

## Content and assets

- Brand and photo assets are in `.github/assets`
- Partner data is centralized in `src/data/partners.ts`

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds with `npm ci` + `npm run build` and deploys `dist/` to GitHub Pages.
