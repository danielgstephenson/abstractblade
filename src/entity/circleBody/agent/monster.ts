import { dirFromTo, getLength as getMagnitude, getRandomDir, mul } from '../../../math'
import { roundVector } from '../../../simulation/actionVectors'
import { Simulation } from '../../../simulation/simulation'
import { EntityState } from '../../entity'
import { CircleBody } from '../circleBody'
import { Agent } from './agent'

export class Monster extends Agent {
  movePower = 20
  drag = 0.7
  align = 3
  targetVelocity = [0, 0]

  constructor(simulation: Simulation, position: number[]) {
    super(simulation, position, 10)
    this.targetVelocity = mul(10, getRandomDir())
    this.simulation.monsters.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    const targetAction = dirFromTo(this.velocity, this.targetVelocity)
    this.action = roundVector(targetAction)
  }

  doesCollide(otherBody: CircleBody): boolean {
    if (otherBody instanceof Agent) {
      if (otherBody.align !== this.align) {
        if (otherBody.invincible()) this.destroy()
        else otherBody.destroy()
        return false
      }
    }
    return true
  }

  onCollide(): void {
    const targetSpeed = getMagnitude(this.targetVelocity)
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
