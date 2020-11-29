import Addon from './addon'
import StateAddon from './state'

declare class AutoStateAddon<T1 extends Addon, T2 extends StateAddon<Addon>> extends Addon {
  constructor(headAddon: T1, ...addons: Array<T2>)

  headAddon: T1
  addons: Array<T2>
}

export default AutoStateAddon
