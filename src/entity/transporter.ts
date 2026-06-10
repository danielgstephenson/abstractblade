import { clamp, getDistance } from '../math'
import { Level } from '../level/level'
import { Player } from './circleBody/agent/player'
import { Entity, EntityState } from './entity'

export class Transporter extends Entity {
  position: number[]
  target: number[]
  radius = 13
  charging = false
  charge = 0
  exit = false
  targetLevel = 1
  targetEntrance = 0
  chargeRate: number

  constructor(level: Level, position: number[], radius: number, target: number[]) {
    super(level)
    this.position = structuredClone(position)
    this.radius = radius
    this.target = structuredClone(target)
    this.level.transporters.push(this)
    this.chargeRate = 2 / this.radius
  }

  preStep(dt: number): void {
    const player = this.level.player
    const distance = getDistance(this.position, player.position)
    let charging = distance < this.radius + player.radius
    this.level.agents.forEach(agent => {
      if (agent.index === player.index) return
      const distance = getDistance(this.position, agent.position)
      const outside = distance > this.radius + agent.radius
      charging = charging && outside
    })
    if (charging) {
      this.charge += dt * this.chargeRate
    } else {
      this.charge -= dt * this.chargeRate
    }
    if (this.charge > 1) {
      this.transport(player)
    }
    this.charge = clamp(0, 1, this.charge)
  }

  transport(player: Player): void {
    this.charge = 0
    if (this.exit) {
      if (player.blade != null) player.blade.detach()
      this.level.leaving = true
      this.level.targetLevel = this.targetLevel
      this.level.targetEntrance = this.targetEntrance
    } else {
      player.position = structuredClone(this.target)
      player.spawnPoint = structuredClone(this.target)
      player.history = player.history.map(_ => structuredClone(this.target))
      if (player.blade != null) player.blade.detach()
      this.level.saveBackup()
    }
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.charge = 0
  }
}
