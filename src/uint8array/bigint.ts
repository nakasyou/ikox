/**
 * Uint8Array to BigInt
 * @module
 */

/**
 * Converts Uint8Array into BigInt
 * @param arr Uint8Array
 * @param bigEndian If it's true or undefined, the input will be processed as a big endian. If it's false, the input will be processed as a little endian.
 * @returns BigInt
 */
const uint8Array_bigint = (arr: Uint8Array, bigEndian = true): bigint => {
  let bigint = 0n
  for (let i = 0, len = arr.byteLength; i < len; i++) {
    bigint = (bigint << 8n) | BigInt(arr[bigEndian ? i : len - i - 1])
  }
  return bigint
}

export default uint8Array_bigint
