/**
 * BigInt to hex string
 * @module
 */

/**
 * Converts bigInt into hex string.
 * @param bigInt BigInt
 * @returns hex string
 */
const bigInt_hex = (bigInt: bigint): string => bigInt.toString(16)

export default bigInt_hex
