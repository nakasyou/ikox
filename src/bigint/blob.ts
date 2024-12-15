/**
 * BigInt to Blob
 * @module
 */

import bigInt_uint8Array from './uint8array.ts'

/**
 * BigInt + Mime type => Blob
 * @param bigInt BigInt
 * @param type Mime Type
 * @param bigEndian If it's true or undefined, result will be big endian. If it's false, result will be little endian.
 * @returns Blob
 */
const bigInt_blob = (
  bigInt: bigint,
  type?: string,
  bigEndian?: boolean,
): Blob => new Blob([bigInt_uint8Array(bigInt, bigEndian)], { type })

export default bigInt_blob
