import { Level } from '../../../level/level'
import { EntityState } from '../../entity'
import { Agent } from './agent'

export class Rover extends Agent {
  movePower = 20
  drag = 0.7
  align = 1

  constructor(level: Level, position: number[]) {
    super(level, position, 5)
    this.level.rovers.push(this)
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
