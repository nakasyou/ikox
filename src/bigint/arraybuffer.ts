/**
 * BigInt to ArrayByffer
 * @module
 */

import bigInt_uint8Array from './uint8array.ts'

/**
 * Converts BigInt into ArrayBuffer
 * @param bigInt BigInt
 * @param bigEndian If it's true or undefined, result will be big endian. If it's false, result will be little endian.
 * @returns ArrayBuffer
 */
const bigInt_arrayBuffer = (bigInt: bigint, bigEndian?: boolean): ArrayBuffer =>
  bigInt_uint8Array(bigInt, bigEndian).buffer

export default bigInt_arrayBuffer
