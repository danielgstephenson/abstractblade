import { Container, Graphics, type ColorSource } from "pixi.js"
import type { Level } from "../level"

export class Entity {
  level: Level
  radius: number
  container: Container
  graphics: Graphics
  mass = 1
  drag = 0.4
  position = [0,0]
  velocity = [0,0]
  force = [0,0]

  constructor(level: Level, position: number[], radius:number, color: ColorSource) {
    this.level = level
    this.container = new Container()
    level.addChild(this.container)
    level.entities.push(this)
    this.graphics = new Graphics()
    this.container.addChild(this.graphics)
    this.position = position
    this.container.x = position[0]
    this.container.y = position[1]
    this.radius = radius
    this.graphics.circle(0,0,radius).fill(color)
  }

  preStep(): void {}
}