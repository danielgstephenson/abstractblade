import { dirFromTo } from '../../../math'
import { roundVector } from '../../../simulation/actionVectors'
import { Simulation } from '../../../simulation/simulation'
import { Agent } from './agent'

export class Rover extends Agent {
  movePower = 10
  drag = 0.7
  align = 1
  targetVelocity = [0, 0]

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 5)
    this.simulation.rovers.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    const targetAction = dirFromTo(this.velocity, this.targetVelocity)
    this.action = roundVector(targetAction)
  }
}
