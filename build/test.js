import parse from '@babel/parser'

console.log(parse.parse(`
export { default as Addon } from './addon.js'
`, { sourceType: 'module' }).program.body[0])