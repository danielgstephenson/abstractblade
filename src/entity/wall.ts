import { Graphics, type ColorSource } from 'pixi.js'
import type { Level } from '../level/level'
import { Entity } from './entity'

export class Wall extends Entity {
  graphics = new Graphics()
  polygon: number[][]

  constructor(level: Level, polygon: number[][], fillColor: ColorSource) {
    super(level)
    this.polygon = structuredClone(polygon)
    this.polygon.forEach((point, i) => {
      if (i === 0) this.graphics.moveTo(point[0], point[1])
      else this.graphics.lineTo(point[0], point[1])
    })
    this.graphics.closePath()
    this.graphics.fill(fillColor)
    this.level.wallContainer.addChild(this.graphics)
  }
}
