/**
 * Blob to Uint8Array.
 * @module
 */

/**
 * Converts Blob to Uint8Array asynchronously.
 * @param blob Blob
 * @returns Promise returns Uint8Array
 */
const blob_uint8Array = async (blob: Blob): Promise<Uint8Array> => new Uint8Array(await blob.arrayBuffer())

export default blob_uint8Array
