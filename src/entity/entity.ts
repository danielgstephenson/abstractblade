import { Level } from '../level/level'

export type EntityState = Record<string, number>

export class Entity {
  level: Level
  index: number
  id = 'entityId'

  constructor(level: Level) {
    this.level = level
    this.index = this.level.entities.length
    this.level.entities.push(this)
  }

  preStep(_dt: number): void {}

  getState(): EntityState {
    return {}
  }

  loadState(_state: EntityState) {}
}
