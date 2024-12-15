# ikox
[![JSR](https://jsr.io/badges/@ns/ikox)](https://jsr.io/@ns/ikox)
[![npm](https://img.shields.io/npm/v/ikox)](https://npmjs.com/packages/ikox)

Ikox is a library for converting data format directly.

## Features

- ⚡️ **Direct Convert**  
No intermediate representation is used. Functions transform data directly.
- 🪶 **Tree Shakable**  
You can reduce bundle size.

## Usage

ikox can convert data format on JavaScript. This process is direct.


For example, you can convert Uint8Array into hex string with ikox:
```ts
import { uint8Array_hex } from 'ikox'

const hex = uint8Array_hex(new Uint8Array(8))
```
It is tree-shakable. Or, you can use default export.
```ts
import uint8Array_hex from 'ikox/uint8array-hex'
```

## Install

with npm:
```shell
npm i ikox # With npm
yarn add ikox # With Yarn
pnpm add ikox # With pnpm
bun add ikox # With Bun
deno add npm:ikox # With Deno
```
with JSR:
```shell
npx jsr add --npm @ns/ikox # With npm
yarn dlx jsr add --yarn @ns/ikox # With yarn
pnpm dlx jsr add --pnpm @ns/ikox # With pnpm
bunx jsr add --bun @ns/ikox # With Bun
deno add jsr:@ns/ikox # With Deno
```

## Supported Data Types

✅ ... No note, 🕐 ... Async Convert, ❌ ... Not Supported.

| Input\Output | ArrayBuffer | BigInt | Blob | Hex | Uint8Array | Base64 |
| :-- | --- | --- | --- | --- | --- | --- |
| ArrayBuffer | - | ✅ | ✅ | ✅ | ✅ | ❌ |
| BigInt | ✅ | - | ✅ | ✅ | ✅ | ❌ |
| Blob | 🕐 | 🕐 | - | 🕐 | 🕐 | ❌ |
| Hex | ✅ | ✅ | ✅ | - | ✅ | ❌ |
| Uint8Array | ✅ | ✅ | ✅ | ✅ | - | ❌ |
| Base64 | ❌ | ❌ | ❌ | ❌ | ❌ | - |
