import Task from './task'

declare class HideTask<T extends Task> extends Task {
  constructor(task: T)

  task: T
  hidden: boolean
}

export default HideTask
