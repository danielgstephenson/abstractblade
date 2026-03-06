import { range } from '../../../math'
import { World } from '../../world'
import { Entity, EntityState } from '../entity'

export class CircleBody extends Entity {
  radius: number
  position: number[]
  mass: number
  star = false
  velocity = [0, 0]
  force = [0, 0]
  impulse = [0, 0]
  shift = [0, 0]
  drag = 0.7
  static = false
  dead = false
  trail: number[][]

  constructor(world: World, position: number[], radius: number) {
    super(world)
    this.position = structuredClone(position)
    this.radius = radius
    this.mass = Math.PI * (0.1 * this.radius) ** 2
    this.world.bodies.push(this)
    this.trail = range(50).map(_ => structuredClone(this.position))
  }

  preStep(_dt: number): void {
    this.trail.push(this.position)
    this.trail.shift()
  }

  die() {
    this.dead = true
  }

  doesCollide(_otherBody: CircleBody): boolean {
    return true
  }

  invincible(): boolean {
    return false
  }

  getState(): EntityState {
    const state = super.getState()
    state.x = this.position[0]
    state.y = this.position[1]
    state.vx = this.velocity[0]
    state.vy = this.velocity[1]
    state.star = Number(this.star)
    state.dead = Number(this.dead)
    return state
  }

  loadState(state: EntityState): void {
    if (state.x != null) this.position[0] = state.x
    if (state.y != null) this.position[1] = state.y
    if (state.vx != null) this.velocity[0] = state.vx
    if (state.vy != null) this.velocity[1] = state.vy
    if (state.star != null) this.star = Boolean(state.star)
    if (state.dead != null) this.dead = Boolean(state.dead)
    this.trail = range(50).map(_ => structuredClone(this.position))
  }
}
