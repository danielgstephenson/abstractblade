import { Level } from '../../level/level'
import { CircleBody } from './circleBody'

export class Rock extends CircleBody {
  drag = 0.6
  bounce = 1

  constructor(level: Level, position: number[], radius: number) {
    super(level, position, radius)
    this.mass = 0.001 * Math.PI * this.radius ** 2
    this.level.rocks.push(this)
  }
}
