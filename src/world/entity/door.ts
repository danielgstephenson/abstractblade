import { add, combine, dirFromTo, getDistance, mean } from '../../math'
import { World } from '../world'
import { Body } from './body/body'
import { Entity } from './entity'

export class Door extends Entity {
  localPoints: number[][]
  points: number[][]
  position: number[]
  startPosition: number[]
  openPosition: number[]
  speed = 10
  star = false

  constructor(world: World, points: number[][], vector: number[]) {
    super(world)
    this.points = points
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const x = mean(xs)
    const y = mean(ys)
    this.position = [x, y]
    this.startPosition = structuredClone(this.position)
    this.openPosition = add(this.startPosition, vector)
    this.localPoints = points.map(p => [p[0] - x, p[1] - y])
    this.world.doors.push(this)
  }

  knock(body: Body): void {
    if (!body.star) return
    this.star = true
    body.star = false
  }

  preStep(dt: number): void {
    const target = this.star ? this.openPosition : this.startPosition
    const distance = getDistance(this.position, target)
    const stepSize = dt * this.speed
    if (distance === 0) return
    if (distance < stepSize) this.position = target
    if (distance >= stepSize) {
      const direction = dirFromTo(this.position, target)
      this.position = combine(1, this.position, stepSize, direction)
    }
    this.points = this.localPoints.map(p => {
      return [p[0] + this.position[0], p[1] + this.position[1]]
    })
  }
}
