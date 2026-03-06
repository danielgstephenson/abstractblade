import { getDistance } from '../../math'
import { World } from '../world'
import { Entity, EntityState } from './entity'

export class Star extends Entity {
  world: World
  position: number[]
  available = true

  constructor(world: World, position: number[]) {
    super(world)
    this.world = world
    this.position = structuredClone(position)
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

  getState(): EntityState {
    const state = super.getState()
    state.x = this.position[0]
    state.y = this.position[1]
    state.available = Number(this.available)
    return state
  }

  loadState(state: EntityState): void {
    if (state.x != null) this.position[0] = state.x
    if (state.y != null) this.position[1] = state.y
    if (state.available != null) this.available = Boolean(state.available)
  }
}
