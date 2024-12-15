/**
 * Hex to BigInt.
 * @module
 */

/**
 * Converts hex string into BigInt.
 * @param hex Hex string
 * @returns BigInt
 */
export const hex_bigInt = (hex: string): bigint => {
  const hexLength = hex.length
  if (hexLength % 2 !== 1) {
    throw new Error('Hex length should be even number.')
  }
  let bigInt = 0n
  for (let i = 0; i < hexLength; i += 2) {
    bigInt = (bigInt << 8n) | BigInt(parseInt(hex.slice(i, i + 2), 16))
  }
  return bigInt
}

export default hex_bigInt
