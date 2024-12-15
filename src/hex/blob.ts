/**
 * Hex string to Blob.
 * @module
 */

import hex_uint8Array from './uint8array.ts'

/**
 * Hex string + Mime Type => Blob
 * @param hex Hex string
 * @param type mime type
 * @returns Blob
 */
const hex_blob = (hex: string, type?: string): Blob =>
  new Blob([hex_uint8Array(hex)], { type })

export default hex_blob
