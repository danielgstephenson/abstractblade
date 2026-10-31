import type { Level } from '../level/level'
import { Orb } from './orb'
import { maxSpeed, rockColor } from '../parameters'
import { getRandomDir, mul } from '../math'

export class Rock extends Orb {
  drag = 0
  bounce = 1
  mass = 0.0000001

  constructor(level: Level, position: number[], radius: number) {
    super(level, position, radius, rockColor, 0)
    level.rocks.push(this)
    level.rockContainer.addChild(this.container)
    const speed = 0.5 * maxSpeed * Math.random()
    this.velocity = mul(speed, getRandomDir())
  }
}
