/**
 * BigInt to Blob
 * @module
 */

import bigInt_uint8Array from './uint8array.ts'

/**
 * BigInt + Mime type => Blob
 * @param bigint BigInt
 * @param type Mime Type
 * @param bigEndian If it's true or undefined, result will be big endian. If it's false, result will be little endian.
 * @returns Blob
 */
const bigInt_blob = (
  bigint: bigint,
  type?: string,
  bigEndian?: boolean,
): Blob => new Blob([bigInt_uint8Array(bigint, bigEndian)], { type })

export default bigInt_blob
