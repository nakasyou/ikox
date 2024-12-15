/**
 * Blob to Base64.
 * @module
 */

import arrayBuffer_base64 from '../arraybuffer/base64.ts'

/**
 * Converts Blob into Base64
 * @param blob Blob
 * @returns Base64
 */
const blob_base64 = (blob: Blob): Promise<string> =>
  blob.arrayBuffer().then(arrayBuffer_base64)

export default blob_base64
