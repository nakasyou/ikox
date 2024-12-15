/**
 * ArrayBuffer to Blob
 * @module
 */

/**
 * Convert ArrayBuffer + MimeType => Blob
 * @param buff ArrayBuffer
 * @param mimeType MimeType
 * @returns A Blob.
 */
const arrayBuffer_blob = (buff: ArrayBuffer, mimeType?: string): Blob =>
  new Blob([buff], {
    type: mimeType,
  })

export default arrayBuffer_blob
