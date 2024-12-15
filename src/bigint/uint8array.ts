/**
 * BigInt to Uint8Array
 * @module
 */

/**
 * Converts BigInt into Uint8Array.
 * @param bigInt BigInt
 * @param bigEndian If it's true or undefined, result will be big endian. If it's false, result will be little endian.
 * @returns Uint8Array
 */
const bigInt_uint8Array = (bigInt: bigint, bigEndian = true): Uint8Array => {
  if (bigInt < 0n) {
    throw new RangeError('input must be positive number.')
  }
  const arr = new Uint8Array((function* () {
    while (bigInt !== 0n) {
      yield Number(bigInt & 0xffn)
      bigInt >>= 8n
    }
  })())
  bigEndian && arr.reverse()
  return arr
}

export default bigInt_uint8Array
