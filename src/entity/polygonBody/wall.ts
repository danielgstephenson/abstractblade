import { Level } from '../../level/level'
import { Entity } from '../entity'

export class Wall extends Entity {
  polygon: number[][]

  constructor(level: Level, points: number[][]) {
    super(level)
    this.polygon = structuredClone(points)
    this.level.walls.push(this)
  }
}
