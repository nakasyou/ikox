/**
 * Base64 to Blob
 * @module
 */

import base64_uint8Array from './uint8array.ts'

/**
 * Base64 string + Mime type => Blob
 * @param base64 Base64
 * @param type Mime Type
 * @returns Blob
 */
const base64_blob = (base64: string, type?: string): Blob =>
  new Blob([base64_uint8Array(base64)], {
    type,
  })

export default base64_blob
