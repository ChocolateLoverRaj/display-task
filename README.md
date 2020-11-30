# display-task
Display tasks on stdout.

## Installing
```bash
npm i display-task
```

## Quick Start
This example shows how to make a green task that says 'Hello'.
```javascript
import { DisplayTask, CustomTask, ColorAddon, TextAddon } from 'display-task'

const myTask = new CustomTask(new ColorAddon(new TextAddon('Hello')))

const displayTask = new DisplayTask(myTask)
```

### Display Task
Efficiently displays tasks on stdout. Refreshes tasks when they are updated.
```javascript
const displayTask = new DisplayTask(aTask)

// To stop displaying task on stdout
displayTask.close() // Returns promise
```

### Tasks
Tasks can show multiple lines of text.

### Custom Task
A task with an addon.
```javascript
new CustomTask(anAddon)
```

### Concat Task
Usually you want to show more than one task. This can be done with a concat task.
```javascript
new ConcatTask(task1, task2, task2)
```

### Addons
Shows text. Addons are always one line.

### Text Addon
Displays text.
```javascript
const addon = new TextAddon('My Addon')

// To change text
addon.text = 'My old addon'
// To refresh display
addon.update()
```

### Color Addon
Uses chalk to color addons. See chalk for acceptable colors.
```javascript
new ColorAddon(anAddon, 'blue')
```

## Importing
Uses EcmaScript Modules

### Everything
The `default` export is `DisplayTask`. There is also a named `DisplayTask` export. You can import `Addons` and `Tasks` namespaces, as well as individual addons / tasks like `ColorAddon`.
```javascript
import Display, { Addons, ColorAddon, DisplayTask } from 'display-task'

Display === DisplayTask // True
Addons.ColorAddon === ColorAddon // True
Addons.Color === ColorAddon // True
```

### Addons or Tasks
For addons and tasks, you can import `/addons` or `/tasks`. You can import `<name>Addon`, or just `<name>`.
```javascript
import { ColorAddon, Color } from 'display-task/addons'

ColorAddon === Color // True
```

### Individual Files
You can import individual addons or tasks. These have default exports.
```javascript
import ColorAddon from 'display-task/addons/color'
```
