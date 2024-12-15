/**
 * Uint8Array to ArrayBuffer.
 * @module
 */

/**
 * Converts Uint8Array to ArrayBuffer.
 * @param input Uint8Array.
 * @returns ArrayBuffer.
 */
const uint8Array_arrayBuffer = (input: Uint8Array): ArrayBuffer => input.buffer.slice(input.byteOffset, input.byteOffset + input.byteLength)

export default uint8Array_arrayBuffer
