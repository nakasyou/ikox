import { assertEquals } from '@std/assert'
import base64_bigInt from './bigint.ts'

Deno.test('base64_bigInt', () => {
  assertEquals(base64_bigInt('EjQ=', true), 0x1234n)
  assertEquals(base64_bigInt('EjQ=', false), 0x3412n)
})
