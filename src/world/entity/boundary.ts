import { World } from '../world'

export class Boundary {
  world: World
  points: number[][]

  constructor(world: World, points: number[][]) {
    this.world = world
    this.world.boundaries.push(this)
    this.points = points
  }
}
