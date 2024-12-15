/**
 * Blob to hex.
 * @module
 */

import uint8Array_hex from '../uint8array/hex.ts'

/**
 * Converts Blob to hex string asynchronously.
 * @param blob Blob
 * @returns
 */
const blob_hex = async (blob: Blob): Promise<string> =>
  uint8Array_hex(new Uint8Array(await blob.arrayBuffer()))

export default blob_hex
