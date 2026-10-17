import { Entity } from './entity'
import type { Level } from '../level/level'
import { insidePolygon } from '../physics/raycast'
import { Wall } from './wall'

export class Room extends Entity {
  polygon: number[][]
  wall: Wall
  visited = false

  constructor(level: Level, polygon: number[][]) {
    super(level)
    level.rooms.push(this)
    this.polygon = structuredClone(polygon)
    this.wall = new Wall(level, polygon, 'black')
  }

  visit(): void {
    this.visited = true
    this.level.reveal.poly(this.polygon.flat()).fill(0xffffff)
  }

  check(): void {
    if (this.visited) return
    if (insidePolygon(this.level.player.position, this.polygon)) {
      this.visit()
    }
  }

  preRender(): void {
    this.check()
  }
}
