import { combine, range } from '../../math'
import { Collision } from '../../simulation/collision'
import { Simulation } from '../../simulation/simulation'
import { Entity, EntityState } from '../entity'

export class CircleBody extends Entity {
  radius: number
  position: number[]
  collisions: Collision[] = []
  mass: number
  star = false
  action = [0, 0]
  velocity = [0, 0]
  force = [0, 0]
  impulse = [0, 0]
  shift = [0, 0]
  drag = 0.7
  bounce = 0
  static = false
  destroyed = false
  trailCount = 100
  trail: number[][]

  constructor(simulation: Simulation, position: number[], radius: number) {
    super(simulation)
    this.position = structuredClone(position)
    this.radius = radius
    this.mass = 1
    this.simulation.circleBodies.push(this)
    this.trail = range(this.trailCount).map(_ => structuredClone(this.position))
  }

  preStep(_dt: number): void {
    this.trail.push(this.position)
    this.trail.shift()
  }

  destroy() {
    this.destroyed = true
  }

  doesCollide(_otherBody: CircleBody): boolean {
    return true
  }

  onCollide(_entity: Entity): void {}

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
    state.dead = Number(this.destroyed)
    return state
  }

  loadState(state: EntityState): void {
    if (state.x != null) this.position[0] = state.x
    if (state.y != null) this.position[1] = state.y
    if (state.vx != null) this.velocity[0] = state.vx
    if (state.vy != null) this.velocity[1] = state.vy
    if (state.star != null) this.star = Boolean(state.star)
    if (state.dead != null) this.destroyed = Boolean(state.dead)
    this.trail = range(this.trailCount).map(_ => structuredClone(this.position))
  }

  getWallPoints(): number[][] {
    const wallPoints = visionDirs.map(visionDir => {
      const lookPoint = combine(1, this.position, visionReach, visionDir)
      const segment = [this.position, lookPoint]
      return this.simulation.segmentCastPoint(segment)
    })
    return wallPoints
  }
}

const visionReach = 200
const visionDirs: number[][] = []
range(8).forEach(i => {
  const angle = (2 * Math.PI * i) / 8
  const dir = [Math.cos(angle), Math.sin(angle)]
  visionDirs.push(dir)
})
