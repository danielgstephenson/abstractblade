import { Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { Wall } from '../entity/polygonBody/wall'

export class WallView extends Graphics {
  levelView: LevelView
  wall: Wall

  constructor(levelView: LevelView, wall: Wall) {
    const graphicsContext = new GraphicsContext()
    wall.polygon.forEach((point, i) => {
      if (i === 0) graphicsContext.moveTo(point[0], point[1])
      else graphicsContext.lineTo(point[0], point[1])
    })
    graphicsContext.closePath()
    graphicsContext.fill(levelView.colors.wallColor)
    super(graphicsContext)
    this.levelView = levelView
    this.wall = wall
    this.cullable = true
    this.levelView.addChild(this)
  }
}
