/**
 * Blob to BigInt
 * @module
 */

import arraybuffer_bigint from '../arraybuffer/bigint.ts'

/**
 * Converts blob into BigInt asynchronously.
 * @param blob 
 * @param bigEndian If it's true or undefined, the input will be processed as a big endian. If it's false, the input will be processed as a little endian.
 * @returns BigInt
 */
const blob_bigInt = async (blob: Blob, bigEndian?: boolean): Promise<bigint> => arraybuffer_bigint(await blob.arrayBuffer(), bigEndian)

export default blob_bigInt
