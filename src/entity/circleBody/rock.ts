import { Simulation } from '../../physics/simulation'
import { CircleBody } from './circleBody'

export class Rock extends CircleBody {
  drag = 1

  constructor(simulation: Simulation, position: number[], radius: number) {
    super(simulation, position, radius)
    this.mass = 0.005 * Math.PI * this.radius ** 2
    this.simulation.rocks.push(this)
  }
}
