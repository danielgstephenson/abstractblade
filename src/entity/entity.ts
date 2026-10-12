import type { Level } from '../level/level'

export class Entity {
  level: Level
  index: number
  removed = false
  tag = ''

  constructor(level: Level) {
    this.level = level
    this.index = level.entities.length
    level.entities.push(this)
  }

  remove(): void {}

  preStep(): void {}

  postStep(): void {}

  preRender(): void {}
}
