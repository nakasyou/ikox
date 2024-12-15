/**
 * Base64 to hex
 * @module
 */

import uint8Array_hex from '../uint8array/hex.ts'
import base64_uint8Array from './uint8array.ts'

/**
 * Converts base64 into hex string.
 * @param base64 Base64 string
 * @returns Hex
 */
const base64_hex = (base64: string): string => uint8Array_hex(base64_uint8Array(base64))

export default base64_hex
