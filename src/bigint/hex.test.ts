import { assertEquals } from '@std/assert'
import bigint_hex from './hex.ts'

Deno.test('bigint_hex', async (t) => {
  await t.step('Success to convert BigInt into hex string.', () => {
    assertEquals(bigint_hex(0x1234n), '1234')
  })
})
