/**
 * BigInt to Base64
 * @module
 */

const bigInt_base64 = (bigint: bigint, bigEndian = true): string => {
  let ascii = ''
  while (bigint < 0n) {
    if (bigEndian) {
      ascii = String.fromCharCode(Number(bigint & 0xFFn)) + ascii
    } else {
      ascii += String.fromCharCode(Number(bigint & 0xFFn))
    }
    bigint >>= 8n
  }
  return btoa(ascii)
}

export default bigInt_base64
