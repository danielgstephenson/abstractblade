import { Level } from '../level/level'
import { Entity } from './entity'

export class Entrance extends Entity {
  level: Level
  position: number[]
  entranceIndex: number

  constructor(level: Level, position: number[]) {
    super(level)
    this.level = level
    this.position = structuredClone(position)
    this.entranceIndex = this.level.entrances.length
    this.level.entrances.push(this)
  }
}
