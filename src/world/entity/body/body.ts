import { World } from '../../world'
import { Entity } from '../entity'

export class Body extends Entity {
  radius: number
  position: number[]
  mass: number
  velocity = [0, 0]
  force = [0, 0]
  impulse = [0, 0]
  shift = [0, 0]
  drag = 0.7

  constructor(world: World, position: number[], radius: number) {
    super(world)
    this.position = position
    this.radius = radius
    this.mass = Math.PI * (0.1 * this.radius) ** 2
    this.world.bodies.push(this)
  }
}
