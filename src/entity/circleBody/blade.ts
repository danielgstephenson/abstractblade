import { clampVec, combine, sub } from '../../math'
import { Simulation } from '../../simulation/simulation'
import { EntityState } from '../entity'
import { Agent } from './agent/agent'
import { CircleBody } from './circleBody'

export class Blade extends CircleBody {
  drag = 0.3
  movePower = 2
  align: number
  agent?: Agent

  constructor(simulation: Simulation, position: number[], align: number) {
    super(simulation, position, 10)
    this.align = align
    this.simulation.blades.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    if (this.agent == null) return
    const vector = sub(this.agent.position, this.position)
    this.force = combine(1, this.force, this.movePower, clampVec(vector, 50))
  }

  attach(agent: Agent): void {
    if (agent.blade != null) return
    if (this.agent != null) return
    agent.blade = this
    this.agent = agent
  }

  detach(): void {
    if (this.agent != null) {
      this.agent.blade = undefined
      this.agent = undefined
    }
  }

  die(): void {
    super.die()
    this.detach()
  }

  doesCollide(otherBody: CircleBody): boolean {
    if (otherBody instanceof Agent) {
      if (otherBody.align === this.align) {
        if (otherBody.blade == null && this.agent == null) this.attach(otherBody)
      }
      if (otherBody.align !== this.align) {
        if (otherBody.invincible()) this.die()
        else otherBody.die()
      }
      return false
    }
    return true
  }

  getState(): EntityState {
    const state = super.getState()
    if (this.agent != null) {
      state.agent = this.agent.agentIndex
    }
    return state
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    if (state.agent == null) {
      this.detach()
      return
    }
    const agent = this.simulation.agents[state.agent]
    this.attach(agent)
  }
}
