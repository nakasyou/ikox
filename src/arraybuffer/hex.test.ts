import { assertEquals } from '@std/assert'
import arrayBuffer_hex from './hex.ts'

Deno.test('arrayBuffer_hex', () => {
  const { buffer } = new Uint8Array([0x14, 0x15, 0x92])
  assertEquals(arrayBuffer_hex(buffer), '141592')
})
