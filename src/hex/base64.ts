/**
 * Hex to Base64
 * @module
 */

/**
 * Converts hex into base64.
 * @param hex Hex string
 * @returns Base64 string
 */
const hex_base64 = (hex: string): string => {
  let ascii = ''
  for (let i = 0, len = hex.length; i < len; i += 2) {
    ascii += String.fromCharCode(parseInt(hex.slice(i, i + 2)))
  }
  return btoa(ascii)
}

export default hex_base64
