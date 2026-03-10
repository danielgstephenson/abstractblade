import { Graphics, GraphicsContext } from 'pixi.js'
import { SimulationView } from './simulationView'
import { Star } from '../entity/star'
import { starColor } from './colors'

export const starGraphicsContext = new GraphicsContext().star(0, 0, 5, 4, 1.8).fill(starColor)

export class StarView extends Graphics {
  simulationView: SimulationView
  starEntity: Star

  constructor(simulationView: SimulationView, star: Star) {
    super(starGraphicsContext)
    this.simulationView = simulationView
    this.starEntity = star
    this.cullable = true
    this.x = star.position[0]
    this.y = star.position[1]
    this.simulationView.addChild(this)
  }

  update(): void {
    this.visible = this.starEntity.available
  }
}
