// This is default because it matches the name of the package
export { default } from './display-task.js'
export { default as DisplayTask } from './display-task.js'

// Exports lib stuff, in case they want to use it
export { default as Display } from './display.js'
export { default as Refresher } from './refresher.js'

// Task exports
export { default as Task } from './tasks/task.js'
export { default as ConcatTask } from './tasks/concat.js'
export { default as CustomTask } from './tasks/custom.js'
export { default as SetTask } from './tasks/set.js'
export { default as SortSetTask } from './tasks/set.js'
export { default as MapTask } from './tasks/map.js'

// Addon exports
export { default as Addon } from './addons/addon.js'
export { default as ConcatAddon } from './addons/concat.js'
export { default as SetAddon } from './addons/set.js'
export { default as ColorAddon } from './addons/color.js'
export { default as MaxLengthAddon } from './addons/max-length.js'
export { default as TextAddon } from './addons/text.js'
