import { range } from '../../../math'
import { World } from '../../world'
import { Entity } from '../entity'

export class Body extends Entity {
  radius: number
  position: number[]
  mass: number
  star = false
  velocity = [0, 0]
  force = [0, 0]
  impulse = [0, 0]
  shift = [0, 0]
  drag = 0.7
  trail: number[][]

  constructor(world: World, position: number[], radius: number) {
    super(world)
    this.position = structuredClone(position)
    this.radius = radius
    this.mass = Math.PI * (0.1 * this.radius) ** 2
    this.world.bodies.push(this)
    this.trail = range(50).map(_ => structuredClone(this.position))
  }

  preStep(_dt: number): void {
    this.trail.push(this.position)
    this.trail.shift()
  }

  doesCollide(_otherBody: Body): boolean {
    return true
  }
}
