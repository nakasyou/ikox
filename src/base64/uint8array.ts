/**
 * Base64 to Uint8Array
 * @module
 */

/**
 * Converts Base64 into Uint8Array
 * @param base64 Base64 string
 * @returns Uint8Array
 */
const base64_uint8Array = (base64: string): Uint8Array => {
  const ascii = atob(base64)
  const asciiLen = ascii.length
  const arr = new Uint8Array(asciiLen)
  for (let i = 0; i < asciiLen; i++) {
    arr[i] = ascii.charCodeAt(i)
  }
  return arr
}

export default base64_uint8Array
