# Austin Knapp - Personal Website

Premium one-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- `next/image`

## Run Locally
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Production
```bash
npm run build
npm start
```

## Deployment Notes (Railway / Vercel)
- This repo is deployment-ready as a standard Next.js app.
- Build command: `npm run build`
- Start command: `npm start`
- Ensure `NODE_ENV=production` in production environments.

## Project Structure
```text
app/
  globals.css
  layout.tsx
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
  twitter-image.tsx
components/
  Capabilities.tsx
  Contact.tsx
  Hero.tsx
  Navbar.tsx
  ProofChips.tsx
  ProjectCard.tsx
  ProjectModal.tsx
  RecruiterFAQ.tsx
  RecruiterSnapshot.tsx
  Section.tsx
  Skills.tsx
  SkillsEvidence.tsx
  Timeline.tsx
public/
  profile-grid.svg
  resume.pdf
```

## Content Updates
- Main content data is in `app/page.tsx`.
- Site-wide metadata is in `app/layout.tsx`.
- Visual theme tokens and motion styling are in `app/globals.css`.
- Recruiter-focused sections include snapshot, technical evidence, and FAQ blocks.
