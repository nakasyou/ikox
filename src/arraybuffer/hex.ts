/**
 * ArrayBuffer to hex string
 * @module
 */

import uint8Array_hex from '../uint8array/hex.ts'

/**
 * Converts ArrayBuffer into hex string.
 * @param input ArrayBuffer
 * @returns Hex string
 */
const arrayBuffer_hex = (input: ArrayBuffer): string => uint8Array_hex(new Uint8Array(input))

export default arrayBuffer_hex
