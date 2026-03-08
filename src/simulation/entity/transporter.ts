import { clamp, getDistance } from '../../math'
import { Simulation } from '../simulation'
import { Entity, EntityState } from './entity'

export class Transporter extends Entity {
  position: number[]
  target: number[]
  radius = 13
  charge = 0
  interval = 4

  constructor(simulation: Simulation, position: number[], target: number[]) {
    super(simulation)
    this.position = structuredClone(position)
    this.target = structuredClone(target)
    this.simulation.transporters.push(this)
  }

  preStep(dt: number): void {
    const player = this.simulation.players[0]
    const distance = getDistance(this.position, player.position)
    const sign = distance < this.radius ? 1 : -1
    this.charge = clamp(0, this.interval, this.charge + sign * dt)
    if (this.charge < this.interval) return
    player.position = structuredClone(this.target)
    player.spawnPoint = structuredClone(this.target)
    if (player.blade != null) player.blade.detach()
    this.simulation.saveState()
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.charge = 0
  }
}
