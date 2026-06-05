import { getRandomDir, mul } from '../../math'
import { Simulation } from '../../simulation/simulation'
import { CircleBody } from './circleBody'

export class Rock extends CircleBody {
  drag = 0.002
  bounce = 1

  constructor(simulation: Simulation, position: number[], radius: number) {
    super(simulation, position, radius)
    this.mass = 0.001 * Math.PI * this.radius ** 2
    this.simulation.rocks.push(this)
    this.velocity = mul(5 * Math.random(), getRandomDir())
  }
}
