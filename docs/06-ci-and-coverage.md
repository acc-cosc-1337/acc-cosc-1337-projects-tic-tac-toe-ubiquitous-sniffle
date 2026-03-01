# CI & Coverage

## What CI runs
- Install dependencies in `app/`
- Run `npm run coverage`

## Coverage gate
- Minimum **75% lines** for the engine scope
- Coverage scope is limited to `src/engine/**` to keep signal high and avoid forcing UI test coverage
