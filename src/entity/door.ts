import { add, combine, dirFromTo, getDistance, mean } from '../math'
import { Simulation } from '../physics/simulation'
import { CircleBody } from './circleBody/circleBody'
import { Entity, EntityState } from './entity'

export class Door extends Entity {
  localPoints: number[][]
  polygon: number[][]
  position: number[]
  startPosition: number[]
  openPosition: number[]
  speed = 10
  star = false

  constructor(simulation: Simulation, points: number[][], vector: number[]) {
    super(simulation)
    this.polygon = structuredClone(points)
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const x = mean(xs)
    const y = mean(ys)
    this.position = [x, y]
    this.startPosition = structuredClone(this.position)
    this.openPosition = add(this.startPosition, vector)
    this.localPoints = points.map(p => [p[0] - x, p[1] - y])
    this.simulation.doors.push(this)
  }

  knock(body: CircleBody): void {
    if (!body.star) return
    if (this.star) return
    this.star = true
    body.star = false
  }

  preStep(dt: number): void {
    const target = structuredClone(this.star ? this.openPosition : this.startPosition)
    const distance = getDistance(this.position, target)
    const stepSize = dt * this.speed
    if (distance === 0) return
    if (distance < stepSize) this.position = target
    if (distance >= stepSize) {
      const direction = dirFromTo(this.position, target)
      this.position = combine(1, this.position, stepSize, direction)
    }
    this.updatePolygon()
  }

  updatePolygon(): void {
    this.polygon = this.localPoints.map(p => {
      return [p[0] + this.position[0], p[1] + this.position[1]]
    })
  }

  getState(): EntityState {
    const state = super.getState()
    state.x = this.position[0]
    state.y = this.position[1]
    state.star = Number(this.star)
    return state
  }

  loadState(state: EntityState): void {
    if (state.x != null) this.position[0] = state.x
    if (state.y != null) this.position[1] = state.y
    if (state.star != null) this.star = Boolean(state.star)
    this.updatePolygon()
  }
}
