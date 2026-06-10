import { Level } from '../../level/level'
import { getRandomDir, mul } from '../../math'
import { CircleBody } from './circleBody'

export class Rock extends CircleBody {
  drag = 0.0
  bounce = 1

  constructor(level: Level, position: number[], radius: number) {
    super(level, position, radius)
    this.mass = 0.0001 * Math.PI * this.radius ** 2
    this.velocity = mul(10 + 30 * Math.random(), getRandomDir())
    this.level.rocks.push(this)
  }
}
