/**
 * Hex to Uint8Array.
 * @module
 */

/**
 * Convert Hex string to Uint8Array.
 * @param hex hex string.
 * @returns Uint8Array
 */
const hex_uint8Array = (hex: string): Uint8Array => {
  const hexLength = hex.length
  if (hexLength % 2 === 1) {
    throw new Error('Hex length should be even number.')
  }
  const arr = new Uint8Array(hexLength / 2)
  for (let i = 0; i < hexLength; i += 2) {
    arr[i / 2] = parseInt(hex.slice(i, i + 2), 16)
  }
  return arr
}

export default hex_uint8Array
