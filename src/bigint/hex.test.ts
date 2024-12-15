import { assertEquals } from '@std/assert'
import bigInt_hex from './hex.ts'

Deno.test('bigInt_hex', async (t) => {
  await t.step('Success to convert BigInt into hex string.', () => {
    assertEquals(bigInt_hex(0x1234n), '1234')
  })
})
