import { CanvasTextMetrics, Container, Text, TextStyle } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { starColor } from '../parameters'

const lockStyle = new TextStyle({
  fontFamily: 'Lekton-Bold',
  fontWeight: 'bold',
  fontSize: 65,
  fill: starColor,
})

export class Sign extends Entity {
  container = new Container()
  text: Text
  ascent: number

  constructor(level: Level, position: number[], text: string) {
    super(level)
    level.gateContainer.addChild(this.container)
    this.container.position.set(position[0], position[1])
    this.text = new Text({ text: text, style: lockStyle, resolution: 3 })
    this.text.anchor.set(0.5, 0)
    this.ascent = CanvasTextMetrics.measureText('0', lockStyle).fontProperties.ascent
    this.text.y = -this.ascent
    this.container.addChild(this.text)
  }

  remove(): void {
    this.removed = true
    this.container.visible = false
  }
}
