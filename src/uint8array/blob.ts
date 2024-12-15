/**
 * Uint8Array to Blob.
 * @module
 */

/**
 * Uint8Array + Mime Type => Blob
 * @param input Uint8Array
 * @param mimeType mime type
 * @returns Blob
 */
const uint8Array_blob = (input: Uint8Array, mimeType?: string): Blob => new Blob([input], { type: mimeType })

export default uint8Array_blob
