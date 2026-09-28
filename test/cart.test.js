import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the worked example returns the expected number', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

  assert.strictEqual(cartTotal(items, options), 467400)
})

test('an empty cart returns zero', () => {
  assert.strictEqual(
    cartTotal([], { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }),
    0,
  )
})

test('subtotal equal to the free-shipping threshold has no shipping fee', () => {
  const items = [{ name: 'Notebook', price: 500000, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }

  assert.strictEqual(cartTotal(items, options), 500000)
})

test('a negative price throws RangeError', () => {
  assert.throws(
    () => cartTotal([{ name: 'Item', price: -1, qty: 1 }], {}),
    RangeError,
  )
})

test('a non-positive quantity throws RangeError', () => {
  assert.throws(
    () => cartTotal([{ name: 'Item', price: 100, qty: 0 }], {}),
    RangeError,
  )
})

test('a non-integer quantity throws RangeError', () => {
  assert.throws(
    () => cartTotal([{ name: 'Item', price: 100, qty: 1.5 }], {}),
    RangeError,
  )
})
