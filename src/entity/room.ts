import { Entity } from './entity'
import type { Level } from '../level/level'
import { insidePolygon } from '../physics/raycast'
import { Wall } from './wall'
import { range } from '../math'
import { Rock } from './rock'

export class Room extends Entity {
  polygon: number[][]
  wall: Wall
  revealed = false

  constructor(level: Level, polygon: number[][]) {
    super(level)
    level.rooms.push(this)
    this.polygon = structuredClone(polygon)
    this.wall = new Wall(level, polygon, 'black')
    this.reveal()
    this.addRocks()
  }

  reveal(): void {
    this.revealed = true
    this.level.reveal.poly(this.polygon.flat()).fill(0xffffff)
  }

  check(): void {
    if (this.revealed) return
    if (insidePolygon(this.level.player.position, this.polygon)) {
      this.reveal()
    }
  }

  preRender(): void {
    this.check()
  }

  addRocks(): void {
    const xMin = Math.min(...this.polygon.map(p => p[0]))
    const xMax = Math.max(...this.polygon.map(p => p[0]))
    const yMin = Math.min(...this.polygon.map(p => p[1]))
    const yMax = Math.max(...this.polygon.map(p => p[1]))
    const dx = xMax - xMin
    const dy = yMax - yMin
    const area = dx * dy
    const count = Math.ceil(area / 300 ** 2)
    range(count).forEach(_ => {
      const x = xMin + dx * Math.random()
      const y = yMin + dy * Math.random()
      const r = 3 + 4 * Math.random()
      if (insidePolygon([x, y], this.polygon)) {
        void new Rock(this.level, [x, y], r)
      }
    })
  }
}
