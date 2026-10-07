import type { ColorSource } from 'pixi.js'
import type { Level } from '../level/level'
import { agentDrag, agentRadius, bladeRadius } from '../parameters'
import { combine, getDistance, mul, normalize } from '../math'
import type { Blade } from './blade'
import { Orb } from './orb'

export class Agent extends Orb {
  align = 0
  drag = agentDrag
  blade?: Blade

  constructor(level: Level, position: number[], color: ColorSource) {
    super(level, position, agentRadius, color)
    level.agents.push(this)
    level.agentContainer.addChild(this.container)
  }

  is_hit(): boolean {
    return this.level.blades.some(blade => {
      if (blade.align === this.align) return false
      const dist = getDistance(blade.position, this.position)
      const minDist = this.radius + blade.radius
      if (dist < minDist) return true
      return false
    })
  }

  respawn(): void {
    const noise = [Math.random(), Math.random()]
    this.position = combine(1, this.position, 0.0001, noise)
    this.velocity = [0, 0]
    this.position = mul(bladeRadius - 500, normalize(this.position))
    if (this.blade == null) return
    this.blade.velocity = [0, 0]
    this.blade.position = structuredClone(this.position)
  }

  preStep(): void {
    super.preStep()
  }

  postStep(): void {
    super.preStep()
  }
}
