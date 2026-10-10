import { Container, Sprite, type ColorSource } from 'pixi.js'
import { Entity } from './entity'
import type { Level } from '../level/level'
import { textureRadius, makeCircleSprite } from '../textures'
import { range } from '../math'

export class Orb extends Entity {
  radius: number
  container: Container
  color: ColorSource
  graphics: Sprite
  trailCount: number
  trail: number[][] = []
  trailContainer: Container
  trailCircles: Sprite[] = []
  bounce = 0
  mass = 1
  drag = 0.4
  position = [0, 0]
  velocity = [0, 0]
  force = [0, 0]

  constructor(level: Level, position: number[], radius: number, color: ColorSource, trailCount = 100) {
    super(level)
    level.orbs.push(this)
    this.container = new Container()
    this.color = color
    this.graphics = makeCircleSprite(radius, color)
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
      const trailCircle = makeCircleSprite(this.radius, this.color)
      trailCircle.alpha = 0.2 * (i / this.trailCount)
      trailCircle.blendMode = 'max'
      trailCircle.x = this.position[0]
      trailCircle.y = this.position[1]
      trailCircle.scale.set((this.radius / textureRadius) * (i / this.trailCount))
      trailCircle.cullable = true
      this.trailContainer.addChild(trailCircle)
      return trailCircle
    })
  }

  preStep(): void {
    this.trail.push(structuredClone(this.position))
    this.trail.shift()
    this.trailCircles.forEach((circle, i) => {
      const h = this.trail[i]
      circle.x = h[0]
      circle.y = h[1]
    })
  }

  preRender(): void {
    this.container.x = this.position[0]
    this.container.y = this.position[1]
  }

  onCollide(entity: Entity) {}
}
