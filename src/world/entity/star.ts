import { World } from '../world'
import { Entity } from './entity'

export class Star extends Entity {
  world: World
  position: number[]

  constructor(world: World, position: number[]) {
    super(world)
    this.world = world
    this.position = position
    this.world.stars.push(this)
  }
}
