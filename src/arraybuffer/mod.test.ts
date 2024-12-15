import { assertEquals } from '@std/assert'
import {
  arrayBuffer_bigInt,
  arrayBuffer_blob,
  arrayBuffer_hex,
  arrayBuffer_uint8Array,
} from './mod.ts'

Deno.test('arrayBuffer_bigInt', async (t) => {
  await t.step('Big Endian', () => {
    const buff = new Uint8Array([0x10, 0x11]).buffer
    assertEquals(arrayBuffer_bigInt(buff), 0x1011n)
  })
  await t.step('Little Endian', () => {
    const buff = new Uint8Array([0x10, 0x11]).buffer
    assertEquals(arrayBuffer_bigInt(buff, false), 0x1110n)
  })
})
Deno.test('arrayBuffer_blob', async () => {
  const { buffer } = new Uint8Array([0, 1, 2, 3])

  assertEquals(buffer, await arrayBuffer_blob(buffer).arrayBuffer())
})
Deno.test('arrayBuffer_hex', () => {
  const { buffer } = new Uint8Array([0x14, 0x15, 0x92])
  assertEquals(arrayBuffer_hex(buffer), '141592')
})
Deno.test('arrayBuffer_uint8Array', () => {
  const arr = new Uint8Array([0, 1, 2, 3, 4, 5, 6])
  const buff = arr.buffer

  assertEquals(arr, arrayBuffer_uint8Array(buff))
})
