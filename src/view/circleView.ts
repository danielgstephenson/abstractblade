import { ColorSource, Container, Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { CircleBody } from '../world/entity/circleBody/circleBody'
import { starGraphicsContext } from './starView'

export class CircleView extends Container {
  worldView: WorldView
  body: CircleBody
  torsoGraphicsContext: GraphicsContext
  torsoGraphics: Graphics
  starGraphics: Graphics

  constructor(worldView: WorldView, body: CircleBody, color: ColorSource) {
    super()
    this.torsoGraphicsContext = new GraphicsContext().circle(0, 0, body.radius).fill(color)
    this.torsoGraphics = new Graphics(this.torsoGraphicsContext)
    this.addChild(this.torsoGraphics)
    this.worldView = worldView
    this.body = body
    this.cullable = true
    this.worldView.addChild(this)
    this.starGraphics = new Graphics(starGraphicsContext)
    this.starGraphics.visible = false
    this.addChild(this.starGraphics)
  }

  update(): void {
    this.x = this.body.position[0]
    this.y = this.body.position[1]
    this.starGraphics.visible = this.body.star
  }
}
