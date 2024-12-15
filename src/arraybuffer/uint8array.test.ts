import { assertEquals } from '@std/assert'
import arrayBuffer_uint8Array from './uint8array.ts'

Deno.test('arrayBuffer_uint8Array', () => {
  const arr = new Uint8Array([0, 1, 2, 3, 4, 5, 6])
  const buff = arr.buffer

  assertEquals(arr, arrayBuffer_uint8Array(buff))
})
