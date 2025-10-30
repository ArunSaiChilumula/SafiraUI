## Quick context

- This repository is a minimal React (v19) app scaffolded with Vite. Key entry points:
  - `index.html` mounts the app at `<div id="root"></div>`.
  - `src/main.jsx` bootstraps React using `createRoot` and `StrictMode`.
  - `src/App.jsx` is the top-level component.

## Build & developer workflows

- Install dependencies before any task:

```powershell
npm install
```

- Run dev server with Vite (HMR / fast refresh enabled via `@vitejs/plugin-react`):

```powershell
npm run dev
```

- Build production bundle:

```powershell
npm run build
```

- Preview a production build locally:

```powershell
npm run preview
```

- Lint everything (project-level ESLint config in `eslint.config.js`):

```powershell
npm run lint
```

## Project layout & conventions to follow

- Top-level front-end source: `src/`
  - `src/main.jsx` — application bootstrap (keep `createRoot` usage).
  - `src/App.jsx` — top-level component; small and focused.
  - `src/SafiraFolder/Components/` — place reusable UI pieces here.
  - `src/SafiraFolder/Pages/` — page-level components / routes.

- Prefer plain .jsx files (this repo has `@types/react` installed but codebase is JS/JSX). Don't switch to TypeScript without confirming repository intent.

- Keep import paths relative to `src` (e.g. `import X from './SafiraFolder/Components/X.jsx'`). Vite resolves ESM imports directly.

## ESLint and style notes (project-specific)

- ESLint config: `eslint.config.js` — targets `**/*.{js,jsx}` and ignores `dist`.
- Rule of note: `no-unused-vars` uses `varsIgnorePattern: '^[A-Z_]'` — variables starting with an uppercase letter or underscore are intentionally ignored by the rule. When adding new variables, follow this naming convention if you need to silence unused-var checks for exported constants.

## Patterns & examples for code edits

- Small change example (add a component):

  1. Create `src/SafiraFolder/Components/MyButton.jsx` exporting a default React component.
  2. Import in `src/App.jsx` with a relative path and use it inside the existing `App` component.

- If you need new Vite plugins or modify dev/build behavior, edit `vite.config.js` (currently only `@vitejs/plugin-react` is enabled).

## Tests & CI

- There are no test runner configs (Jest/Playwright/Vitest) in the repo. Do not add tests/CI config without coordinating — add a short note in the PR describing motivations and the chosen tool.

## Integration points & external dependencies

- Dependencies are minimal: `react` and `react-dom`. There are no external API clients or server code in the repository. If you introduce new external services, document credentials/usage in the README and prefer environment variables for secrets.

## Agent guidance (how an AI should behave here)

- Keep changes minimal and local: prefer editing/adding files under `src/` and configuration under project root only when necessary.
- Preserve existing ESLint patterns and the `no-unused-vars` naming convention.
- Use the project's NPM scripts for build/dev steps; avoid inventing custom scripts unless needed and discussed.
- When adding dependencies, list them in `package.json` and run `npm install` in your PR notes; avoid unpinned experimental packages.

If anything above is unclear or you need more detail (routing conventions, intended production host, or planned TypeScript migration), tell me which area to expand and I'll update this file.
