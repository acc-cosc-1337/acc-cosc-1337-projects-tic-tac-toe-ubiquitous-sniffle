# Tic Tac Toe Engine (React Template) — Iteration 1

This repository is a **template** for building a Tic Tac Toe **engine** using vertical slices (mini SDLCs):

Requirement → Tests → Implementation → CI → Done

React is included as a **demo harness**. The engine remains UI-agnostic and lives in `app/src/engine/`.

## Quickstart

```bash
cd app
npm install
npm test
npm run dev
```

## Quality Gates

- Unit tests required
- Coverage gate: **≥ 75% lines** (engine scope) enforced by `npm run coverage` and CI

## Repository structure

- `docs/` — requirements, contracts, invariants, scenarios, slices, CI notes
- `app/` — React + Vite + Vitest
  - `src/engine/` — engine (the product)
  - `src/__tests__/` — unit tests (engine-focused)

## What’s included (green on day 1)

- Starting player initialization (X or O)
- Basic game state (currentPlayer + status)

Next slices add: move validation, win/draw detection, terminal lock, snapshot exposure, smoke tests.
