# ACLS Code Blue Learning Program

An interactive Advanced Cardiovascular Life Support (ACLS) educational app for nurses, paramedics, medical students, and emergency responders.

## Run & Operate

- `pnpm --filter @workspace/acls-code-blue run dev` — run the frontend (uses workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, framer-motion, wouter
- No backend required — all clinical data is hardcoded as TypeScript data files
- API: Express 5 (present but unused by this app)

## Where things live

- `artifacts/acls-code-blue/src/` — Frontend React app
- `artifacts/acls-code-blue/src/data/` — Hardcoded ACLS content (algorithms, medications, scenarios, quiz)
- `artifacts/acls-code-blue/src/pages/` — Page components
- `lib/api-spec/openapi.yaml` — API contract (health check only)

## Architecture decisions

- Frontend-only: All ACLS clinical content (algorithms, drug dosing, simulation scenarios) is hardcoded TypeScript data — no database or backend needed
- wouter handles all client-side routing
- framer-motion for step-through algorithm animations and simulation transitions
- shadcn/ui component library for consistent clinical UI

## Product

Users can:
- Browse all major ACLS algorithms with interactive step-through flowcharts
- Reference full medication compendium with doses, indications, nursing notes
- Run Code Blue simulations with branching decision scenarios
- Take knowledge quizzes with clinical explanations
- Access a quick-reference sheet for all key content

## User preferences

_Populate as you build._

## Gotchas

- No backend is needed — do not add a database or API routes for this app
- Clinical content accuracy is critical — follow current AHA ACLS guidelines
- All content lives in `src/data/` TypeScript files

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
