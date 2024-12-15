import { assertEquals } from '@std/assert'
import arrayBuffer_blob from './blob.ts'

Deno.test('arrayBuffer_blob', async () => {
  const { buffer } = new Uint8Array([0, 1, 2, 3])

  assertEquals(buffer, await arrayBuffer_blob(buffer).arrayBuffer())
})
