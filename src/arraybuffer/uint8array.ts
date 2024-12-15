/**
 * ArrayBuffer to Uint8Array.
 * @module
 */

/**
 * Converts ArrayBuffer to Uint8Array.
 * @param input ArrayBuffer
 * @returns Uint8Array
 */
const arrayBuffer_uint8Array = (input: ArrayBuffer): Uint8Array =>
  new Uint8Array(input)

export default arrayBuffer_uint8Array
