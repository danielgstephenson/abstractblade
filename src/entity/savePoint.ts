import { Graphics } from 'pixi.js'
import type { Level } from '../level/level'
import { Entity } from './entity'
import { saveColor, savePointColor } from '../parameters'
import { mean } from '../math'
import { insidePolygon } from '../physics/raycast'

export class SavePoint extends Entity {
  graphics = new Graphics()
  polygon: number[][]
  center: number[]
  id: string

  constructor(level: Level, polygon: number[][], id: string) {
    super(level)
    this.id = id
    this.level.savePoints.push(this)
    this.polygon = structuredClone(polygon)
    this.polygon.forEach((point, i) => {
      if (i === 0) this.graphics.moveTo(point[0], point[1])
      else this.graphics.lineTo(point[0], point[1])
    })
    this.graphics.closePath()
    this.graphics.stroke({
      color: 'white',
      width: 5,
      alignment: 1,
    })
    this.graphics.tint = savePointColor
    this.level.wallContainer.addChild(this.graphics)
    const x = mean(this.polygon.map(p => p[0]))
    const y = mean(this.polygon.map(p => p[1]))
    this.center = [x, y]
  }

  preStep(): void {
    super.preStep()
    const player = this.level.player
    if (insidePolygon(player.position, this.polygon)) {
      player.spawnPoint = this.center
      this.level.save()
      this.level.savePoints.forEach(s => (s.graphics.tint = savePointColor))
      this.graphics.tint = saveColor
    }
  }

  remove(): void {
    this.removed = true
    this.graphics.visible = false
  }
}
