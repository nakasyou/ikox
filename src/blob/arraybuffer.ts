/**
 * Blob to ArrayBuffer.
 * @module
 */

/**
 * Converts Blob to ArrayBuffer asynchronously.
 * @param blob Input Blob.
 * @returns Promise returning ArrayBuffer.
 */
const blob_arrayBuffer = (blob: Blob): Promise<ArrayBuffer> => blob.arrayBuffer()

export default blob_arrayBuffer
