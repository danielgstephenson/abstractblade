import { Level } from '../../level/level'
import { Entity } from '../entity'

export class Boundary extends Entity {
  polygon: number[][]

  constructor(level: Level, polygon: number[][]) {
    super(level)
    this.level.boundaries.push(this)
    this.polygon = structuredClone(polygon)
  }
}
