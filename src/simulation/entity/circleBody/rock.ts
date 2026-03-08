import { Simulation } from '../../simulation'
import { CircleBody } from './circleBody'

export class Rock extends CircleBody {
  drag = 1

  constructor(simulation: Simulation, position: number[], radius: number) {
    super(simulation, position, radius)
    this.simulation.rocks.push(this)
  }
}
