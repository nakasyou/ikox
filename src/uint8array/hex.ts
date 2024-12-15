/**
 * Uint8Array to hex
 * @module
 */

/**
 * Converts Uint8Array into hex string.
 * @param input Uint8Array
 * @returns Hex string
 */
const uint8Array_hex = (input: Uint8Array): string => {
  let hex = ''
  for (let i = 0, len = input.length; i < len; i++) {
    hex += input[i].toString(16)
  }
  return hex
}

export default uint8Array_hex
