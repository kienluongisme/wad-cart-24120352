# Self-Assessment Report

Student ID: **24120352**

| Rubric criterion | Claimed mark | Evidence |
| --- | ---: | --- |
| cartTotal behavior | 30/30 | `src/cart.js` implements subtotal, VAT, threshold-based shipping, empty-cart handling, final whole-dong rounding, numeric return, and the required `RangeError` cases. The worked example and required edge cases pass in `npm test`. Implementation commit: `31d52b1`. |
| Tests | 20/20 | `test/cart.test.js` contains six specification-based tests: worked example, empty cart, free-shipping threshold, negative price, non-positive quantity, and non-integer quantity. `npm test` passed with 6/6 tests. |
| Harness | 20/20 | `package.json` provides `npm test` and `npm run lint`; lint passed. `.github/workflows/ci.yml` runs both commands on Node 22, and `AI-LOG.md` records successful GitHub Actions CI on `main`. Harness setup is recorded in commit `1b932bb`; successful CI is recorded in `AI-LOG.md` and verified by GitHub Actions on `main`. |
| Brief | 15/15 | `BRIEF.md` defines the scope, `cartTotal(items, options)` contract, calculation rules, required error cases, testing requirements, ES-module/plain-JavaScript constraints, and no-dependencies rule. |
| AI-LOG.md | 15/15 | `AI-LOG.md` records the tool, generated work, rejected or changed parts, human actions, and validation for the harness, brief, implementation/tests, and repository/CI work. |

## Total score

**100/100**

## What I did not manage

I did not add a separate test focused specifically on fractional-result rounding; the current tests cover all required cases listed in `BRIEF.md`, and `src/cart.js` applies the required final rounding.
