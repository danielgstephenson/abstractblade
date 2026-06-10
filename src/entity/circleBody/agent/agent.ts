import { sum } from '../../../math'
import { Level } from '../../../level/level'
import { Blade } from '../blade'
import { CircleBody } from '../circleBody'

export class Agent extends CircleBody {
  movePower = 20
  drag = 0.7
  align = 1
  action = [0, 0]
  targetVelocity = [0, 0]
  targetPoint = [0, 0]
  blade?: Blade
  agentIndex: number
  actionTimer = 0

  constructor(level: Level, position: number[], radius: number) {
    super(level, position, radius)
    this.mass = 1
    this.agentIndex = this.level.agents.length
    this.level.agents.push(this)
  }

  preStep(dt: number): void {
    super.preStep(dt)
    if (this.destroyed && this.blade != null) {
      this.blade.detach()
    }
    const active = sum(this.action.map(x => x ** 2)) > 0
    this.actionTimer = active ? 0 : this.actionTimer + dt
  }
}
