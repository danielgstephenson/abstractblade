import { World } from '../world'
import { Entity } from './entity'

export class Boundary extends Entity {
  polygon: number[][]

  constructor(world: World, polygon: number[][]) {
    super(world)
    this.world.boundaries.push(this)
    this.polygon = structuredClone(polygon)
  }
}
