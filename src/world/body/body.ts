import { range } from '../../math'
import { World } from '../world'

export class Body {
  world: World
  radius: number
  position: number[]
  mass: number
  historyLength = 20
  history: number[][]
  velocity = [0, 0]
  force = [0, 0]
  impulse = [0, 0]
  shift = [0, 0]
  drag = 0.7

  constructor(world: World, position: number[], radius: number) {
    this.world = world
    this.position = position
    this.radius = radius
    this.mass = Math.PI * (0.1 * this.radius) ** 2
    this.history = range(this.historyLength).map(_ => this.position)
    this.world.bodies.push(this)
  }

  preStep(): void {}
}
