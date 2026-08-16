import { Container, Graphics, GraphicsContext, type ColorSource } from "pixi.js"
import type { Level } from "../level"
import { range } from "../math"

export class Entity {
  level: Level
  radius: number
  container: Container
  graphicsContext: GraphicsContext
  graphics: Graphics
  trailCount: number
  trail: number[][] = []
  trailContainer: Container
  trailCircles: Graphics[] = []
  index: number
  mass = 1
  drag = 0.4
  position = [0,0]
  velocity = [0,0]
  force = [0,0]

  constructor(level: Level, position: number[], radius:number, color: ColorSource, trailCount = 100) {
    this.level = level
    this.container = new Container()
    level.addChild(this.container)
    this.index = level.entities.length
    level.entities.push(this)
    this.graphicsContext = new GraphicsContext().circle(0,0,radius).fill(color)
    this.graphics = new Graphics(this.graphicsContext)
    this.container.addChild(this.graphics)
    this.trailCount = trailCount
    this.trailContainer = new Container()
    this.level.trailContainer.addChild(this.trailContainer)
    this.position = structuredClone(position)
    this.container.x = position[0]
    this.container.y = position[1]
    this.radius = radius
    this.setupTrail()
  }

  setupTrail(): void {
    this.trail = range(this.trailCount).map(_ => structuredClone(this.position))
    this.trailCircles = range(this.trailCount).map(i => {
      const trailCircle = new Graphics(this.graphicsContext)
      trailCircle.alpha = 0.2 * (i / this.trailCount)
      trailCircle.blendMode = 'max'
      trailCircle.x = this.position[0]
      trailCircle.y = this.position[1]
      trailCircle.scale = 1 * (i / this.trailCount)
      trailCircle.cullable = true
      this.trailContainer.addChild(trailCircle)
      return trailCircle
    })
  }

  preStep(): void {
    this.trail.push(this.position)
    this.trail.shift()
    this.trailCircles.forEach((circle,i) => {
      const h = this.trail[i]
      circle.x = h[0]
      circle.y = h[1]
    })
  }
}