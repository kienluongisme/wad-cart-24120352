# IA#1 Brief — cartTotal

## Task

Implement `cartTotal(items, options)` in `src/cart.js`.

## Scope

You may modify:

- `src/cart.js`
- `test/cart.test.js`

You must not modify:

- `package.json`
- `AGENTS.md`
- `.github/workflows/ci.yml`
- `README.md`
- `.gitignore`

Do not add any dependencies.

## Contract

Implement:

```js
cartTotal(items, options)

Input
items is an array of cart items.
Each item has:
- name
- price
- qty
options contains:
- vatRate
- freeShipFrom
- shipFee
Behaviour
1. Calculate subtotal as the sum of:
   price * qty
   for every item.
2. VAT is calculated from the subtotal using vatRate.
3. Shipping:
   - If subtotal >= freeShipFrom, shipping is 0.
   - Otherwise, shipping is shipFee.
4. The final result is:
   subtotal + VAT + shipping
5. Return a JavaScript number.
6. Round the final result to the nearest whole đồng.
Required cases
The implementation must satisfy all of these cases:
- The worked example must return 467400 as a number.
- An empty cart must return 0.
- When subtotal is exactly equal to freeShipFrom, shipping must be free.
- A negative price must throw RangeError.
- A qty that is not a positive integer must throw RangeError.
  This includes:
  - qty <= 0
  - non-integer values such as 1.5
Worked example
cartTotal(
  [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 }
  ],
  {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000
  }
)

Expected result:
467400

Calculation:
- subtotal = 405000
- VAT = 32400
- shipping = 30000
- total = 467400
Testing requirements
Use Node's built-in:
- node:test
- node:assert/strict
Tests must verify the specification, not internal implementation details.
Tests must cover:
- worked example
- empty cart
- free-shipping threshold
- negative price
- invalid quantity
Each test should have one clear reason to fail.
Constraints
- Plain JavaScript only.
- ES modules.
- No external dependencies.
- Do not use toFixed() to produce the return value because the result must be a number.
- Keep the implementation small and readable.
- Do not change the specification to make tests pass.
Done when
The task is complete when:
npm run lint
npm test

both pass.
