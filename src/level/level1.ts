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
    this.updateMonsters()
  }

  updateRovers(time: Ticker): void {
    const player = this.player
    const targetSpeed = 10
    const dangers = [...this.monsters, ...this.blades]
    const safeDistance = 30
    this.rovers.forEach(rover => {
      let minDangerDistance = safeDistance
      dangers.forEach(danger => {
        const distance = getDistance(rover.position, danger.position)
        if (distance < minDangerDistance) {
          const segment = [rover.position, danger.position]
          const visible = this.segmentCast(segment).length === 0
          if (visible) {
            minDangerDistance = distance
            const targetDir = dirFromTo(danger.position, rover.position)
            rover.targetVelocity = mul(2 * targetSpeed, targetDir)
          }
        }
      })
      if (minDangerDistance < safeDistance) return
      const distance = getDistance(rover.position, player.position)
      if (distance > 50 && distance < 100) {
        const segment = [rover.position, player.position]
        const visible = this.segmentCast(segment).length === 0
        if (visible) {
          const targetDir = dirFromTo(rover.position, player.position)
          rover.targetVelocity = mul(targetSpeed, targetDir)
        }
        return
      }
      if (2000 * Math.random() < time.deltaMS) {
        rover.targetVelocity = mul(targetSpeed, getRandomDir())
      }
    })
  }

  updateMonsters(): void {
    const preyAgents = [this.player, ...this.rovers].filter(x => !x.destroyed)
    const targetSpeed = 15
    this.monsters.forEach(monster => {
      let minDistance = 200
      preyAgents.forEach(prey => {
        const distance = getDistance(monster.position, prey.position)
        if (distance < minDistance) {
          const segment = [monster.position, prey.position]
          const visible = this.segmentCast(segment).length === 0
          if (visible) {
            minDistance = distance
            const targetDir = dirFromTo(monster.position, prey.position)
            monster.targetVelocity = mul(targetSpeed, targetDir)
          }
        }
      })
    })
  }
}
