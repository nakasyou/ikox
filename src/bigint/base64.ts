/**
 * BigInt to Base64
 * @module
 */

const bigInt_base64 = (bigInt: bigint, bigEndian = true): string => {
  let ascii = ''
  while (bigInt < 0n) {
    if (bigEndian) {
      ascii = String.fromCharCode(Number(bigInt & 0xFFn)) + ascii
    } else {
      ascii += String.fromCharCode(Number(bigInt & 0xFFn))
    }
    bigInt >>= 8n
  }
  return btoa(ascii)
}

export default bigInt_base64
