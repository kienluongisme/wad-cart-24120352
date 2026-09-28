# AI-LOG.md

## 2026-09-28  Harness setup

Tool:
Codex.

Asked for:
A minimal harness for the cartTotal assignment.

Produced:
Inspected the starter repository, created AGENTS.md, added npm run lint using
node --check, created .github/workflows/ci.yml, and modified package.json.

Changed or rejected:
Rejected a proposed temporary rule equivalent to "Never modify src/cart.js
during harness setup" because it should not become a permanent project rule.
No dependencies were added.

Human actions:
The student reviewed the proposed harness before allowing the changes and
rejected the temporary rule that would have prevented later modification of
src/cart.js.

Validation:
The harness setup is recorded in git history.

## 2026-09-28  Brief preparation

Tool:
Manual authoring by the student, with Codex inspection.

Asked for:
An assignment brief based on the specification and rubric.

Produced:
The student wrote BRIEF.md manually.

Changed or rejected:
Codex initially reported BRIEF.md as empty and stopped instead of implementing.
The student fixed BRIEF.md before continuing.

Human actions:
The student wrote and fixed BRIEF.md.

## 2026-09-28  cartTotal implementation and tests

Tool:
Codex.

Asked for:
Implementation of cartTotal and specification-based tests.

Produced:
Read AGENTS.md and BRIEF.md, implemented cartTotal in src/cart.js, and added
tests in test/cart.test.js for the worked example, empty cart,
free-shipping threshold, negative price, non-positive quantity, and
non-integer quantity.

Changed or rejected:
No external dependencies were added. No generated implementation change
needed to be rejected after review.

Human actions:
The student manually reviewed the generated diff before committing.

Validation:
npm run lint passed. npm test passed with 6 tests.

## 2026-09-28  Repository and CI

Tool:
Git and GitHub Actions.

Human actions:
The first push to the original starter repository failed because the student
did not have permission. The student renamed that remote to upstream,
configured their own GitHub repository as origin, and pushed main there.

Validation:
GitHub Actions CI completed successfully on main. At inspection, git status
showed only AI-LOG.md as untracked; HEAD and origin/main were 31d52b1.
