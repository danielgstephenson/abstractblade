import { dirFromTo, getLength, getRandomDir, mul } from '../../../math'
import { roundVector } from '../../../simulation/actionVectors'
import { Simulation } from '../../../simulation/simulation'
import { EntityState } from '../../entity'
import { Agent } from './agent'

export class Rover extends Agent {
  movePower = 20
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

  onCollide(): void {
    const targetSpeed = getLength(this.targetVelocity)
    this.targetVelocity = mul(targetSpeed, getRandomDir())
  }

  getState(): EntityState {
    const state = super.getState()
    state.targetVelocityX = this.targetVelocity[0]
    state.targetVelocityY = this.targetVelocity[1]
    return state
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.targetVelocity = [state.targetVelocityX, state.targetVelocityY]
  }
}
