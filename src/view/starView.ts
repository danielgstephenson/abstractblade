import { Graphics, GraphicsContext } from 'pixi.js'
import { LevelView } from './levelView'
import { Star } from '../entity/star'

export const starGraphicsContext = new GraphicsContext().star(0, 0, 5, 4, 1.8)

export class StarView extends Graphics {
  levelView: LevelView
  starEntity: Star

  constructor(levelView: LevelView, star: Star) {
    const graphicsContext = new GraphicsContext().star(0, 0, 5, 4, 1.8)
    super(graphicsContext)
    this.fill(levelView.colors.starColor)
    this.levelView = levelView
    this.starEntity = star
    this.cullable = true
    this.x = star.position[0]
    this.y = star.position[1]
    this.levelView.addChild(this)
  }

  update(): void {
    this.visible = this.starEntity.available
  }
}
