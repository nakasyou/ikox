/**
 * ArrayBuffer to BigInt.
 * @module
 */

/**
 * Converts ArrayBuffer into BigInt.
 * @param input ArrayBuffer
 * @param bigEndian If it's true or undefined, the input will be processed as a big endian. If it's false, the input will be processed as a little endian.
 * @returns BigInt
 */
const arraybuffer_bigInt = (input: ArrayBuffer, bigEndian = true): bigint => {
  const view = new DataView(input)
  let bigInt = 0n

  for (let i = 0, len = input.byteLength; i < len; i++) {
    bigInt = (bigInt << 8n) |
      BigInt(view.getUint8(bigEndian ? i : (len - i - 1)))
  }

  return bigInt
}

export default arraybuffer_bigInt
