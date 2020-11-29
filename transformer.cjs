const { mock } = require('jest-mock-imports')

exports.process = mock({
  modules: new Map(),
  files: new Set()
    .add('lib/display.js')
})
