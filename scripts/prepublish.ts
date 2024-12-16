import * as fs from '@std/fs'
import * as path from '@std/path'
import * as ts from 'typescript'
import * as esbuild from 'esbuild'

// npm
await fs.emptyDir('./dist')
const compilerOptions: ts.CompilerOptions = {
  outDir: 'dist',
  declaration: true,
  emitDeclarationOnly: true,
  module: ts.ModuleKind.ESNext,
  target: ts.ScriptTarget.ESNext,
}
const targetPaths = (await Array.fromAsync(fs.expandGlob('./src/**/*.ts', {
  exclude: ['**/*.test.ts'],
}))).map((e) => e.path)

const program = ts.createProgram(targetPaths, compilerOptions)
program.emit()

await esbuild.build({
  entryPoints: targetPaths,
  outdir: 'dist',
})

const packageJson = {
  name: 'ikox',
  version: Deno.args[0] ?? '0.0.0',
  private: false,
  type: 'module',
  files: ['dist', 'README.md', 'LICENSE'],
  exports: Object.fromEntries(
    (await Array.fromAsync(fs.expandGlob('./dist/**/*.js', {
      exclude: ['./dist/*/mod.js'],
    }))).map((entry) => {
      const relativePath = path.relative('dist', entry.path).replaceAll(
        '\\',
        '/',
      )
      const value = {
        types: './dist/' + relativePath.replace(/\.js$/, '.d.ts'),
        default: './dist/' + relativePath,
      }
      if (relativePath === 'mod.js') {
        return ['.', value]
      }
      return ['./' + relativePath.replace(/\.js$/, '').replace('/', '-'), value]
    }),
  ),
}
await Deno.writeTextFile('package.json', JSON.stringify(packageJson, null, 2))

// JSR
const denoConfig: {
  version: string
  exports: Record<string, string>
} = JSON.parse(await Deno.readTextFile('deno.json'))

denoConfig.version = Deno.args[0] ?? denoConfig.version
denoConfig.exports = {
  '.': './src/mod.ts',
}

for await (
  const entry of fs.expandGlob('./src/*/*.ts', {
    exclude: ['**/*.test.ts', '**/mod.ts'],
  })
) {
  const relativePath = path.relative('src', entry.path).replaceAll('\\', '/')

  denoConfig
    .exports['./' + relativePath.replace('/', '-').replace(/\.ts$/, '')] =
      `./src/${relativePath}`
}

await Deno.writeTextFile('deno.json', JSON.stringify(denoConfig, null, 2))
