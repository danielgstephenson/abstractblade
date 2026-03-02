import { World } from '../world'
import { Entity } from './entity'

export class Boundary extends Entity {
  points: number[][]

  constructor(world: World, points: number[][]) {
    super(world)
    this.world.boundaries.push(this)
    this.points = points
  }
}
