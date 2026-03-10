import { ColorSource, Container, Graphics, GraphicsContext } from 'pixi.js'
import { SimulationView } from './simulationView'
import { CircleBody } from '../entity/circleBody/circleBody'
import { starGraphicsContext } from './starView'

export class CircleView extends Container {
  simulationView: SimulationView
  body: CircleBody
  torsoGraphicsContext: GraphicsContext
  torsoGraphics: Graphics
  starGraphics: Graphics

  constructor(simulationView: SimulationView, body: CircleBody, color: ColorSource) {
    super()
    this.torsoGraphicsContext = new GraphicsContext().circle(0, 0, body.radius).fill(color)
    this.torsoGraphics = new Graphics(this.torsoGraphicsContext)
    this.addChild(this.torsoGraphics)
    this.simulationView = simulationView
    this.body = body
    this.cullable = true
    this.simulationView.addChild(this)
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
