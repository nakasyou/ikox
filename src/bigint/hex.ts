/**
 * BigInt to hex string
 * @module
 */

/**
 * Converts bigint into hex string.
 * @param bigint BigInt
 * @returns hex string
 */
const bigInt_hex = (bigint: bigint): string => bigint.toString(16)

export default bigInt_hex
