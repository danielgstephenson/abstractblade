import { ColorSource, Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { Body } from '../world/entity/body/body'

export class BodyView extends Graphics {
  worldView: WorldView
  body: Body
  graphicsContext: GraphicsContext

  constructor(worldView: WorldView, body: Body, color: ColorSource) {
    const graphicsContext = new GraphicsContext().circle(0, 0, body.radius).fill(color)
    super(graphicsContext)
    this.graphicsContext = graphicsContext
    this.worldView = worldView
    this.body = body
    this.cullable = true
    this.worldView.addChild(this)
  }

  update(): void {
    this.x = this.body.position[0]
    this.y = this.body.position[1]
  }
}
