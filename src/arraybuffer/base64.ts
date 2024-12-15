/**
 * ArrayBuffer to Base64 string
 * @module
 */

const arrayBuffer_base64 = (buff: ArrayBuffer) => {
  const arr = new Uint8Array(buff)
  let ascii = ''
  for (let i = 0; i < arr.byteLength; i++) {
    ascii += String.fromCharCode(arr[i])
  }
  return btoa(ascii)
}

export default arrayBuffer_base64
