import { mean } from '../../math'
import { World } from '../world'
import { Body } from './body/body'
import { Entity } from './entity'

export class Door extends Entity {
  localPoints: number[][]
  points: number[][]
  position: number[]
  star = false

  constructor(world: World, points: number[][]) {
    super(world)
    this.points = points
    const xs = points.map(p => p[0])
    const ys = points.map(p => p[1])
    const x = mean(xs)
    const y = mean(ys)
    this.position = [x, y]
    this.localPoints = points.map(p => [p[0] - x, p[1] - y])
    this.world.doors.push(this)
  }

  knock(body: Body): void {
    if (!body.star) return
    this.star = true
    body.star = false
  }

  preStep(): void {
    this.points = this.localPoints.map(p => {
      return [p[0] + this.position[0], p[1] + this.position[1]]
    })
  }
}
