/**
 * Base64 to ArrayBuffer
 * @module
 */

/**
 * Converts Base64 into ArrayBuffer
 * @param base64 Base64
 * @returns ArrayBuffer
 */
const base64_arrayBuffer = (base64: string): ArrayBuffer => {
  const ascii = atob(base64)
  const len = ascii.length
  const buff = new ArrayBuffer(len)
  const view = new DataView(buff)
  for (let i = 0; i < len; i++) {
    view.setUint8(i, ascii.charCodeAt(i))
  }
  return buff
}

export default base64_arrayBuffer
