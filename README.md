# Yes Dental

Yes Dental – Astro + React islands + Tailwind CSS v4 + Framer Motion.

## Commands
- `npm install`
- `npm run dev` – http://localhost:4321
- `npm run build` / `npm run preview`

## Structure
- `src/pages` – routes
- `src/layouts` – page shells
- `src/components` – static `.astro` components (layout / sections / ui)
- `src/islands` – React + Framer Motion, only for interactive parts
- `src/lib` – helpers, shared motion variants
- `src/data` – site content (nav, services)
- `src/styles/global.css` – Tailwind entry + theme tokens

## Rule for islands
Default to `.astro` (zero JS). Use a React island only for interaction/animation,
and pick the lightest directive: `client:visible`, `client:media`, `client:idle`, then `client:load`.
