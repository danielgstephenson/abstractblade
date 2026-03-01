import { World } from '../world'

export class Entity {
  world: World
  index: number

  constructor(world: World) {
    this.world = world
    this.index = this.world.entities.length
    this.world.entities.push(this)
  }

  preStep(): void {}
}
