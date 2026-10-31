import type { Level } from '../level/level'
import { botBladeColor, botColor } from '../parameters'
import { Agent } from './agent'
import { Blade } from './blade'

export class Bot extends Agent {
  align = 1
  frequency = 1
  noise = 0
  goal = 'attack'
  blade: Blade
  wanderPoint: number[]

  constructor(level: Level, position: number[]) {
    super(level, position, botColor)
    level.bots.push(this)
    this.blade = new Blade(this, botBladeColor)
    this.wanderPoint = position
  }

  preStep(): void {
    super.preStep()
  }
}
