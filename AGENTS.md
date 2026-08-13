# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project Overview

**Dev Mentorship Community** is a marketing/community website for a developer mentorship organization. It is a static-friendly, SEO-optimized Next.js site with animated, glassmorphic dark-theme UI. Deployed to Netlify (https://dev-mentorship-community.netlify.app/).

## Tech Stack

- **Next.js 14** with the App Router (`app/` directory)
- **TypeScript** (strict mode enabled)
- **Tailwind CSS** with `tailwindcss-animate` and CSS variables for theming
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form handling and validation
- **Radix UI** (`@radix-ui/react-dialog`) for accessible primitives
- **lucide-react** for icons
- **class-variance-authority** (cva) + `clsx` + `tailwind-merge` for variant-based styling

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server on http://localhost:3001 (note: port 3001, not 3000)
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # Run next lint (ESLint with eslint-config-next)
```

There is no test suite configured. Validate changes with `npm run lint` and `npm run build`.

## Project Structure

```
app/                    # App Router routes; each subfolder is a page route
  layout.tsx            # Root layout: metadata, fonts, Navbar/Footer, forces dark mode
  page.tsx              # Home page
  globals.css           # Global styles, CSS theme variables, custom utilities
  not-found.tsx         # 404 page
  about/ apply/ contact/ events/ mentor/   # Route segments
components/             # Reusable components (PascalCase top-level)
  ui/                   # Low-level UI primitives (badge, dialog) — lowercase filenames
  events/               # Feature-specific components — lowercase, kebab-case filenames
lib/                    # Shared logic and data
  utils.ts              # `cn()` helper (clsx + tailwind-merge)
  events-data.ts        # Typed static data (Event interface + events array)
public/assets/          # Images and static assets
```

## Conventions

### Imports
- Use the `@/*` path alias for all internal imports (maps to repo root). Example: `import { cn } from "@/lib/utils"`.

### Components
- Add `"use client"` at the top of any component using hooks, state, browser APIs, or Framer Motion. Default to Server Components when no client features are needed.
- Top-level components in `components/` use **PascalCase** filenames (e.g. `Navbar.tsx`, `FeatureCard.tsx`) and default exports.
- Components in `components/ui/` and `components/events/` use **lowercase/kebab-case** filenames (e.g. `badge.tsx`, `session-card.tsx`).
- Define prop types with a local `interface` (e.g. `interface SessionCardProps`).

### Styling
- Use Tailwind utility classes. Merge conditional classes with the `cn()` helper from `@/lib/utils`.
- Theme via CSS variables and semantic color tokens (`bg-background`, `text-foreground`, `border-border`, `primary`, `muted`, etc.) defined in `app/globals.css` and `tailwind.config.ts`. Prefer these tokens over hardcoded colors.
- Custom utilities available: `.gradient-text`, `.glass-card`, `.text-balance` (see `app/globals.css`).
- The site is dark-mode only — the root `<html>` has the `dark` class hardcoded in `app/layout.tsx`.
- For variant-driven components, follow the `cva` pattern used in `components/ui/badge.tsx`.

### Animations
- Use Framer Motion (`motion.*` components). Common pattern: `initial`/`whileInView` with `viewport={{ once: true }}` and a `transition` delay for staggered entrances.

### Forms
- Use React Hook Form with Zod schemas via `@hookform/resolvers`. See `app/apply/` and `app/contact/`.

### Data
- Static content lives in typed modules under `lib/` (e.g. `lib/events-data.ts`). Keep exported `interface` types alongside the data.

### Code Style
- TypeScript strict mode is on — keep code fully typed; avoid `any`.
- Double quotes, no semicolons (match existing files).
- Use `next/image` for images and `next/link` for internal navigation.

## SEO & Metadata
- Page metadata is defined via the App Router `Metadata` export (see `app/layout.tsx`). Keep titles, descriptions, Open Graph, and Twitter tags in sync when adding pages.

## Adding a New Page
1. Create a folder under `app/<route>/` with a `page.tsx`.
2. Add a `Navbar` link in `components/Navbar.tsx` (`navLinks` array) if it should be in the nav.
3. Export route-specific `metadata` for SEO when applicable.
4. Run `npm run lint` and `npm run build` to verify.

## Notes for Agents
- Do not introduce new state-management, CSS-in-JS, or styling libraries; stick to Tailwind + cva.
- Keep the dark, glassmorphic aesthetic consistent with existing components.
- Reuse `cn()` and existing semantic tokens rather than ad-hoc colors.
- This is a private project; do not add license headers or external service integrations without being asked.
