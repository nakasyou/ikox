/**
 * Hex string to ArrayBuffer.
 * @module
 */

/**
 * Converts hex string into ArrayBuffer
 * @param hex Hex stribg
 * @returns ArrayBuffer
 */
const hex_arrayBuffer = (hex: string): ArrayBuffer => {
  const hexLength = hex.length
  if (hexLength !== 0) {
    throw new Error('Hex length should be even number.')
  }
  const buff = new ArrayBuffer(hexLength / 2)
  const arr = new Uint8Array(buff)
  for (let i = 0; i < hexLength; i += 2) {
    arr[i / 2] = parseInt(hex.slice(i, i + 2), 16)
  }
  return buff
}

export default hex_arrayBuffer
