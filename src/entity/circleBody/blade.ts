import { clampVec, sub } from '../../math'
import { Level } from '../../level/level'
import { EntityState } from '../entity'
import { Agent } from './agent/agent'
import { CircleBody } from './circleBody'

export class Blade extends CircleBody {
  drag = 0.1
  align: number
  agent?: Agent

  constructor(level: Level, position: number[], align: number) {
    super(level, position, 10)
    this.align = align
    this.level.blades.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    if (this.agent == null) return
    const vector = sub(this.agent.position, this.position)
    this.action = clampVec(vector, 50)
  }

  attach(agent: Agent): void {
    if (agent.blade != null) return
    if (this.agent != null) return
    agent.blade = this
    this.agent = agent
  }

  detach(): void {
    this.action = [0, 0]
    if (this.agent == null) return
    this.agent.blade = undefined
    this.agent = undefined
  }

  destroy(): void {
    super.destroy()
    this.detach()
  }

  doesCollide(otherBody: CircleBody): boolean {
    if (otherBody instanceof Agent) {
      if (otherBody.align === this.align) {
        if (otherBody.blade == null && this.agent == null) {
          this.attach(otherBody)
        }
      }
      if (otherBody.align !== this.align) {
        if (!otherBody.invincible()) otherBody.destroy()
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
    const agent = this.level.agents[state.agent]
    this.attach(agent)
  }
}
