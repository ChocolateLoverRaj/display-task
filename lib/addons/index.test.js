import {
  Addon,
  AutoState,
  AutoStateAddon
} from './index.js'
import DefaultAddon from './addon.js'
import DefaultAutoStateAddon from './auto-state.js'

test('Addon', () => {
  expect(Addon).toBe(DefaultAddon)
})

test('AutoStateAddon', () => {
  expect(AutoState).toBe(DefaultAutoStateAddon)
  expect(AutoStateAddon).toBe(DefaultAutoStateAddon)
})
