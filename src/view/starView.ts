import { Graphics, GraphicsContext } from 'pixi.js'
import { WorldView } from './worldView'
import { Star } from '../world/entity/star'
import { starColor } from './colors'

export const starGraphicsContext = new GraphicsContext().star(0, 0, 5, 4, 1.8).fill(starColor)

export class StarView extends Graphics {
  worldView: WorldView
  starEntity: Star

  constructor(worldView: WorldView, star: Star) {
    super(starGraphicsContext)
    this.worldView = worldView
    this.starEntity = star
    this.cullable = true
    this.x = star.position[0]
    this.y = star.position[1]
    this.worldView.addChild(this)
  }

  update(): void {
    this.visible = this.starEntity.available
  }
}
