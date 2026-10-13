import { Entity } from './entity'
import type { Level } from '../level/level'

export class Entrance extends Entity {
  id: string
  position: number[]

  constructor(level: Level, id: string, position: number[]) {
    super(level)
    this.id = id
    this.position = position
    level.entrances.push(this)
  }
}
