import { Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { Star } from '../world/entity/star'

export class StarView extends Graphics {
  worldView: WorldView
  graphicsContext: GraphicsContext
  entity: Star

  constructor(worldView: WorldView, star: Star) {
    // const graphicsContext = new GraphicsContext().circle(0, 0, 5).fill(`hsl(60,100%,40%)`)
    const graphicsContext = new GraphicsContext().star(0, 0, 5, 4, 1.8).fill(`hsl(60,100%,40%)`)
    super(graphicsContext)
    this.graphicsContext = graphicsContext
    this.worldView = worldView
    this.entity = star
    this.cullable = true
    this.x = star.position[0]
    this.y = star.position[1]
    this.worldView.addChild(this)
    console.log('starView', this.x, this.y)
  }

  update(): void {}
}
