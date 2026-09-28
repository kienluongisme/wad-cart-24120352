# Project rules

- Stack: plain JavaScript using ES modules and Node.js built-in APIs only.
- Main source file: `src/cart.js`.
- Tests: Node's built-in `node:test` under `test/`.
- Commands: `npm test` and `npm run lint`.
- Use ES-module `import`/`export` syntax.
- Keep the implementation small and readable.
- Preserve the public `cartTotal(items, options)` contract.
- Tests should verify specification behavior rather than implementation details.

Never:

- Add a dependency unless explicitly approved.
- Commit secrets or `.env` files.
- Modify files outside the scope of the current brief.
- Change tests merely to make incorrect implementation code pass.
