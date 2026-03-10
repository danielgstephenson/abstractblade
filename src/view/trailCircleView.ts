import { ColorSource, Container, Graphics } from 'pixi.js'
import { SimulationView } from './simulationView'
import { CircleView } from './circleView'
import { CircleBody } from '../entity/circleBody/circleBody'
import { Player } from '../entity/circleBody/agent/player'

export class TrailCircleView extends CircleView {
  trail: Container
  trailCircles: Graphics[]

  constructor(simulationView: SimulationView, body: CircleBody, color: ColorSource) {
    super(simulationView, body, color)
    this.trail = new Container()
    this.simulationView.trailContainer.addChild(this.trail)
    const L = this.body.trail.length
    this.trailCircles = this.body.trail.map((p, i) => {
      const trailCircle = new Graphics(this.torsoGraphicsContext)
      trailCircle.alpha = 0.05 * (i / L)
      trailCircle.x = p[0]
      trailCircle.x = p[1]
      trailCircle.cullable = true
      this.trail.addChild(trailCircle)
      return trailCircle
    })
    this.cullable = true
  }

  update(): void {
    super.update()
    const visible = !this.body.dead || this.body instanceof Player
    this.visible = visible
    this.trailCircles.forEach((circle, i) => {
      const h = this.body.trail[i]
      circle.x = h[0]
      circle.y = h[1]
      circle.visible = visible
    })
  }
}
