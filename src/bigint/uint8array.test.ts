import { assertEquals, assertThrows } from '@std/assert'
import bigInt_uint8Array from './uint8array.ts'

Deno.test('bigInt_uint8Array', async (t) => {
  await t.step('Big endian', () => {
    assertEquals(bigInt_uint8Array(0x1112n), new Uint8Array([17, 18]))
  })
  await t.step('Little endian', () => {
    assertEquals(bigInt_uint8Array(0x1112n, false), new Uint8Array([18, 17]))
  })
  await t.step('It should throw error when received negative number', () => {
    assertThrows(() => bigInt_uint8Array(-1n))
  })
})
