
import type { Level } from "../level"
import { add, clampVec, getRandomDir, mul } from "../math"
import { arenaRadius, bladeRadius, botBladeColor, botColor } from "../parameters"
import { Agent } from "./agent"
import { Blade } from "./blade"

export class Bot extends Agent {
  align = 1
  blade: Blade

  constructor(level: Level, position: number[]) {
    super(level, position, botColor)
    this.blade = new Blade(this,botBladeColor)
  }

  preStep(): void {
    super.preStep()
    this.check_hit()
  }

  check_hit(): void {
    if(this.is_hit()) {
      this.level.onVictory()
    }
  }
}