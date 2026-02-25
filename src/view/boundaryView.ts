import { Application, FillPattern, Graphics, Rectangle } from 'pixi.js'
import { Boundary } from '../world/boundary'

export class BoundaryView extends Graphics {
  boundary: Boundary
  app: Application

  constructor(boundary: Boundary) {
    super()
    this.boundary = boundary
    this.app = boundary.world.game.app
    boundary.points.forEach((point, i) => {
      if (i === 0) {
        this.moveTo(point[0], point[1])
        return
      }
      this.lineTo(point[0], point[1])
    })
    this.closePath()
    this.fill('hsl(0,0%,10%)')
    const view = this.boundary.world.view
    view.addChild(this)
  }

  addFill(): void {
    const graphics = new Graphics()
    const R = 100
    graphics.rect(0, 0, R, R).fill('hsl(0,50%,50%)')
    graphics.rect(0, 0, 0.5 * R, 0.5 * R).fill('hsl(0,100%,100%)')
    // range(4).forEach(_ => {
    //   const x = R * Math.random()
    //   const y = R * Math.random()
    //   graphics.circle(x, y, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x + R, y + 0, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x - R, y + 0, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x + 0, y + R, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x + 0, y - R, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x + R, y + R, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x - R, y + R, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x + R, y - R, 0.3 * R).fill(fillGradient)
    //   graphics.circle(x - R, y - R, 0.3 * R).fill(fillGradient)
    // })
    const texture = this.app.renderer.generateTexture({
      target: graphics,
      clearColor: 'hsl(0,0%,0%)',
      antialias: false,
      frame: new Rectangle(0, 0, R, R),
      resolution: 1,
    })
    const fillPattern = new FillPattern(texture)
    fillPattern.transform = this.getGlobalTransform().clone().invert()
    fillPattern.transform.scale(0.5, 0.5)
    this.fill(fillPattern)
    console.log({
      width: texture.width,
      height: texture.height,
      frame: texture.frame,
      scaleX: graphics.scale.x,
      scaleY: graphics.scale.y,
    })
  }
}
