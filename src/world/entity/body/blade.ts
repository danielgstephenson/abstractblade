import { combine, dirFromTo } from '../../../math'
import { World } from '../../world'
import { Agent } from './agent/agent'
import { Body } from './body'

export class Blade extends Body {
  drag = 0.2
  movePower = 5
  align: number
  agent?: Agent

  constructor(world: World, position: number[], align: number) {
    super(world, position, 10)
    this.mass = 0.3
    this.align = align
    this.world.blades.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    if (this.agent == null) return
    const direction = dirFromTo(this.position, this.agent.position)
    this.force = combine(1, this.force, this.movePower, direction)
  }

  attach(agent: Agent): void {
    this.detach()
    agent.blade = this
    this.agent = agent
  }

  detach(): void {
    if (this.agent != null) {
      this.agent.blade = undefined
      this.agent = undefined
    }
  }

  doesCollide(otherBody: Body): boolean {
    if (otherBody instanceof Agent && otherBody.align === this.align) {
      if (otherBody.blade == null && this.agent == null) this.attach(otherBody)
      return false
    }
    return true
  }
}
