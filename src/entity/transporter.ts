import { clamp, getDistance } from '../math'
import { Simulation } from '../simulation/simulation'
import { Player } from './circleBody/agent/player'
import { Entity, EntityState } from './entity'

export class Transporter extends Entity {
  position: number[]
  target: number[]
  radius = 13
  charge = 0
  interval = 4
  exit = false
  targetLevel = 1
  targetEntrance = 0

  constructor(simulation: Simulation, position: number[], target: number[]) {
    super(simulation)
    this.position = structuredClone(position)
    this.target = structuredClone(target)
    this.simulation.transporters.push(this)
  }

  preStep(dt: number): void {
    const player = this.simulation.player
    const distance = getDistance(this.position, player.position)
    const sign = distance < this.radius ? 1 : -1
    this.charge = clamp(0, this.interval, this.charge + sign * dt)
    if (this.charge < this.interval) return
    this.transport(player)
  }

  transport(player: Player): void {
    this.charge = 0
    if (this.exit) {
      this.simulation.leaving = true
      this.simulation.targetLevel = this.targetLevel
      this.simulation.targetEntrance = this.targetEntrance
    } else {
      player.position = structuredClone(this.target)
      player.spawnPoint = structuredClone(this.target)
      if (player.blade != null) player.blade.detach()
    }
    this.simulation.saveBackup()
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.charge = 0
  }
}
