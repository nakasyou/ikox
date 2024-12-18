/**
 * Base64 to BigInt
 * @module
 */

/**
 * Converts Base64 into BigInt.
 * @param base64 Base64
 * @returns BigInt
 */
const base64_bigInt = (base64: string, bigEndian = true): bigint => {
  let bigInt = 0n
  const ascii = atob(base64)
  const len = ascii.length
  for (let i = 0; i < len; i++) {
    bigInt = (bigInt << 8n) |
      BigInt(ascii.charCodeAt(bigEndian ? i : len - i - 1))
  }
  return bigInt
}

export default base64_bigInt
