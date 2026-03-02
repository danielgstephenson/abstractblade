import { getDistance } from '../../math'
import { World } from '../world'
import { Entity } from './entity'

export class Star extends Entity {
  world: World
  position: number[]
  available = true

  constructor(world: World, position: number[]) {
    super(world)
    this.world = world
    this.position = position
    this.world.stars.push(this)
  }

  preStep(): void {
    if (!this.available) return
    const player = this.world.players[0]
    if (player.star) return
    const distance = getDistance(this.position, player.position)
    if (distance > 9) return
    player.star = true
    this.available = false
  }
}
