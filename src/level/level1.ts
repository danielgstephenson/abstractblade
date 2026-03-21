import { Level } from './level'
import { World } from '../world'
import svgString from '../svg/level1.svg?raw'
import { Ticker } from 'pixi.js'
import { dirFromTo, dot, getDistance, getRandomDir, mul } from '../math'

export class Level1 extends Level {
  constructor(world: World) {
    super(world, 1, svgString)
    this.rovers.forEach(rover => {
      rover.targetVelocity = mul(30, getRandomDir())
    })
  }

  update(time: Ticker): void {
    super.update(time)
    this.updateRovers(time)
    this.updateMonsters()
  }

  updateRovers(time: Ticker): void {
    const player = this.player
    const targetSpeed = 20
    const dangers = [...this.monsters, ...this.blades].filter(danger => !danger.destroyed)
    const safeDistance = 100
    this.rovers.forEach(rover => {
      if (rover.destroyed) return
      let minDangerDistance = safeDistance
      dangers.forEach(danger => {
        const distance = getDistance(rover.position, danger.position)
        if (distance < minDangerDistance) {
          const segment = [rover.position, danger.position]
          const visible = this.segmentCast(segment).length === 0
          if (visible) {
            minDangerDistance = distance
            const toDanger = dirFromTo(rover.position, danger.position)
            const movingToDanger = dot(toDanger, rover.targetVelocity) > 0
            if (movingToDanger) rover.targetVelocity = mul(-2 * targetSpeed, getRandomDir())
          }
        }
      })
      if (minDangerDistance < safeDistance) return
      const distance = getDistance(rover.position, player.position)
      if (distance < 400) {
        const segment = [rover.position, player.position]
        const visible = this.segmentCast(segment).length === 0
        if (visible) {
          const targetDir = dirFromTo(rover.position, player.position)
          const movingToPlayer = dot(targetDir, rover.targetVelocity) > 0
          if (distance < 15) {
            if (movingToPlayer) rover.targetVelocity = mul(targetSpeed, getRandomDir())
            return
          }
          if (distance > 40) {
            if (!movingToPlayer) rover.targetVelocity = mul(targetSpeed, getRandomDir())
            return
          }
        }
        if (!visible) {
          for (const point of player.history) {
            const segment = [rover.position, point]
            const visible = this.segmentCast(segment).length === 0
            if (visible) {
              const targetDir = dirFromTo(rover.position, point)
              rover.targetVelocity = mul(targetSpeed, targetDir)
              return
            }
          }
        }
      }
      if (2000 * Math.random() < time.deltaMS) {
        rover.targetVelocity = mul(targetSpeed, getRandomDir())
      }
    })
  }

  updateMonsters(): void {
    const targetSpeed = 30
    this.monsters.forEach(monster => {
      if (monster.destroyed) return
      const player = this.player
      if (getDistance(monster.position, player.spawnPoint) < 70) {
        const segment = [monster.position, player.spawnPoint]
        const visible = this.segmentCast(segment).length === 0
        if (visible) {
          monster.targetVelocity = mul(50, dirFromTo(this.player.spawnPoint, monster.position))
          return
        }
      }
      const preyAgents = [this.player, ...this.rovers].filter(x => !x.destroyed)
      const reach = 200
      let minPreyDistance = reach
      preyAgents.forEach(prey => {
        const distance = getDistance(monster.position, prey.position)
        if (distance < minPreyDistance) {
          const segment = [monster.position, prey.position]
          const visible = this.segmentCast(segment).length === 0
          if (visible) {
            minPreyDistance = distance
            const targetDir = dirFromTo(monster.position, prey.position)
            monster.targetVelocity = mul(targetSpeed, targetDir)
          }
        }
      })
      if (minPreyDistance < reach) return
      for (const point of player.history) {
        const segment = [monster.position, point]
        const visible = this.segmentCast(segment).length === 0
        if (visible) {
          const targetDir = dirFromTo(monster.position, point)
          monster.targetVelocity = mul(targetSpeed, targetDir)
          return
        }
      }
    })
  }
}
