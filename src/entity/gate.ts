// src/entity/lock.ts
import { CanvasTextMetrics, Container, Text, TextStyle } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { starColor } from '../parameters'
import type { Wall } from './wall'

const lockStyle = new TextStyle({
  fontFamily: 'Lekton-Bold',
  fontWeight: 'bold',
  fontSize: 65,
  fill: starColor,
})

export class Gate extends Entity {
  container = new Container()
  label: Text
  ascent: number
  wall?: Wall
  quota = 2
  removed = false

  constructor(level: Level, position: number[]) {
    super(level)
    level.gates.push(this)
    level.gateContainer.addChild(this.container)
    this.container.position.set(position[0], position[1])
    this.label = new Text({ text: '', style: lockStyle, resolution: 3 })
    this.label.anchor.set(0.5, 0)
    this.ascent = CanvasTextMetrics.measureText('0', lockStyle).fontProperties.ascent
    this.label.y = -this.ascent
    this.container.addChild(this.label)
  }

  preRender(): void {
    const next = `${this.level.game.starCount}/${this.quota}`
    if (this.label.text !== next) this.label.text = next
    if (this.removed) return
    if (this.level.game.starCount >= this.quota) {
      this.remove()
      if (this.wall != null) {
        this.wall.remove()
      }
    }
  }

  remove(): void {
    this.removed = true
    this.container.visible = false
  }
}
