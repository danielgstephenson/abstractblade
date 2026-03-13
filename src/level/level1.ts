import { Level } from './level'
import { World } from '../world'
import svgString from '../svg/level1.svg?raw'
import { Ticker } from 'pixi.js'
import { dirFromTo, getDistance, getRandomDir, mul } from '../math'

export class Level1 extends Level {
  constructor(world: World) {
    super(world, 1, svgString)
  }

  update(time: Ticker): void {
    super.update(time)
    this.updateRovers(time)
  }

  updateRovers(time: Ticker): void {
    const player = this.player
    const targetSpeed = 10
    this.rovers.forEach(rover => {
      const distance = getDistance(rover.position, player.position)
      if (distance < 50) {
        if (1000 * Math.random() < time.deltaMS) {
          rover.targetVelocity = mul(targetSpeed, getRandomDir())
        }
        return
      }
      if (distance < 200) {
        const segment = [rover.position, player.position]
        const visible = this.segmentCast(segment).length === 0
        if (visible) {
          const targetDir = dirFromTo(rover.position, player.position)
          rover.targetVelocity = mul(targetSpeed, targetDir)
        }
      }
    })
  }
}
