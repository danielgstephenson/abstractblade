import { Container, Graphics, type ColorSource } from "pixi.js"
import type { Level } from "../level"

export class Entity extends Container {
  level: Level
  radius: number
  graphics: Graphics
  vx = 0
  vy = 0

  constructor(level: Level, x: number, y: number, radius:number, color: ColorSource) {
    super()
    this.level = level
    level.addChild(this)
    level.entities.push(this)
    this.x = x
    this.y = y
    this.radius = radius
    this.graphics = new Graphics()
    this.addChild(this.graphics)
    this.graphics.circle(0,0,radius).fill(color)
  }
}