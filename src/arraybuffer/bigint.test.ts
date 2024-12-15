import { assertEquals } from '@std/assert'
import arraybuffer_bigInt from './bigint.ts'

Deno.test('arraybuffer_bigInt', async t => {
  await t.step('Big Endian', () => {
    const buff = new Uint8Array([0x10, 0x11]).buffer
    assertEquals(arraybuffer_bigInt(buff), 0x1011n)
  })
  await t.step('Little Endian', () => {
    const buff = new Uint8Array([0x10, 0x11]).buffer
    assertEquals(arraybuffer_bigInt(buff, false), 0x1110n)
  })
})
