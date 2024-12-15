/**
 * Uint8Array to Base64
 * @module
 */

/**
 * Convert Uint8Array into base64.
 * @param arr Uint8Array
 * @returns Base64 string
 */
const uint8Array_base64 = (arr: Uint8Array): string => {
  let ascii = ''
  for (let i = 0; i < arr.byteLength; i++) {
    ascii += String.fromCharCode(arr[i])
  }
  return btoa(ascii)
}

export default uint8Array_base64
