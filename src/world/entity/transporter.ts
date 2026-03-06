import { clamp, getDistance } from '../../math'
import { World } from '../world'
import { Entity, EntityState } from './entity'

export class Transporter extends Entity {
  position: number[]
  target: number[]
  radius = 13
  charge = 0
  interval = 4

  constructor(world: World, position: number[], target: number[]) {
    super(world)
    this.position = structuredClone(position)
    this.target = structuredClone(target)
    this.world.transporters.push(this)
  }

  preStep(dt: number): void {
    const player = this.world.players[0]
    const distance = getDistance(this.position, player.position)
    const sign = distance < this.radius ? 1 : -1
    this.charge = clamp(0, this.interval, this.charge + sign * dt)
    if (this.charge < this.interval) return
    player.position = structuredClone(this.target)
    player.spawnPoint = structuredClone(this.target)
    if (player.blade != null) player.blade.detach()
    this.world.saveState()
  }

  loadState(state: EntityState): void {
    super.loadState(state)
    this.charge = 0
  }
}
