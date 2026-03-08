import { Simulation } from '../../../simulation'
import { Agent } from './agent'

export class Rover extends Agent {
  drag = 0.7
  align = 1

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 5)
    this.simulation.rovers.push(this)
  }
}
