import { World } from '../world'

export type EntityState = Record<string, number>

export class Entity {
  world: World
  index: number
  name = 'entityName'

  constructor(world: World) {
    this.world = world
    this.index = this.world.entities.length
    this.world.entities.push(this)
  }

  preStep(_dt: number): void {}

  getState(): EntityState {
    return {}
  }

  loadState(_state: EntityState) {}
}
