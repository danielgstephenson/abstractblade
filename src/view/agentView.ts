import { ColorSource, Container, Graphics } from 'pixi.js'
import { WorldView } from './worldView'
import { Agent } from '../world/body/agent/agent'
import { BodyView } from './bodyView'

export class AgentView extends BodyView {
  trail: Container
  trailCircles: Graphics[]
  body: Agent

  constructor(worldView: WorldView, agent: Agent, color: ColorSource) {
    super(worldView, agent, color)
    this.body = agent
    this.trail = new Container()
    this.worldView.trails.addChild(this.trail)
    const L = this.body.history.length
    this.trailCircles = this.body.history.map((p, i) => {
      const trailCircle = new Graphics(this.graphicsContext)
      trailCircle.alpha = 0.05 * (i / L)
      trailCircle.x = p[0]
      trailCircle.x = p[1]
      trailCircle.cullable = true
      this.trail.addChild(trailCircle)
      return trailCircle
    })
    this.cullable = true
    this.worldView.addChild(this)
  }

  update(): void {
    super.update()
    this.trailCircles.forEach((circle, i) => {
      const h = this.body.history[i]
      circle.x = h[0]
      circle.y = h[1]
    })
  }
}
