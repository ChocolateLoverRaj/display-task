// Build index.js files for addons and tasks
// These files export all the other files
import { dirname } from 'dirname-filename-esm'
import generator from '@babel/generator'
import types from '@babel/types'
import { join } from 'path'
import { writeFile } from 'fs/promises'

const __dirname = dirname(import.meta)

const libPath = join(__dirname, '../lib')

const dirs = ['tasks', 'addons']

console.time('build')
Promise.all(dirs.map(async dir => {
  const dirPath = join(libPath, dir)
  const { code } = await generator.default(
    types.addComment(types.program([]), 'trailing', ' Generated by build/build.js', true)
  )
  await writeFile(join(dirPath, 'index.js'), code)
}))
  .then(() => {
    console.timeEnd('build')
  })
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
