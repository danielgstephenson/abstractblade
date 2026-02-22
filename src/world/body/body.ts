import { World } from '../world'

export class Body {
  world: World
  radius: number
  position: number[]
  mass: number
  velociy = [0, 0]
  force = [0, 0]
  impulse = [0, 0]
  shift = [0, 0]
  drag = 0

  constructor(world: World, position: number[], radius: number) {
    this.world = world
    this.position = position
    this.radius = radius
    this.mass = Math.PI * (0.1 * this.radius) ** 2
  }
}
