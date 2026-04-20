import { getRandomDir, mul } from '../../../math'
import { Simulation } from '../../../physics/simulation'
import { Entity, EntityState } from '../../entity'
import { Agent } from './agent'

export class Rover extends Agent {
  movePower = 20
  drag = 0.7
  align = 1

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 5)
    this.simulation.rovers.push(this)
  }

  onCollide(_entity: Entity): void {
    this.targetVelocity = mul(30, getRandomDir())
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
