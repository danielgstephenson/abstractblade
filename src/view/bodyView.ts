import { ColorSource, Container, Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { Body } from '../world/entity/body/body'
import { starGraphicsContext } from './starView'

export class BodyView extends Container {
  worldView: WorldView
  body: Body
  torsoGraphicsContext: GraphicsContext
  torsoGraphics: Graphics
  starGraphics: Graphics

  constructor(worldView: WorldView, body: Body, color: ColorSource) {
    super()
    this.torsoGraphicsContext = new GraphicsContext().circle(0, 0, body.radius).fill(color)
    this.torsoGraphics = new Graphics(this.torsoGraphicsContext)
    this.addChild(this.torsoGraphics)
    this.worldView = worldView
    this.body = body
    this.cullable = true
    this.worldView.layer3.addChild(this)
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
