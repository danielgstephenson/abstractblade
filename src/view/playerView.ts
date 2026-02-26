import { Container, Graphics, GraphicsContext } from 'pixi.js'
import { Player } from '../world/body/player'
import { WorldView } from './worldView'

const playerColor = 'hsl(220, 100%, 50%)'
const playerCircle = new GraphicsContext().circle(0, 0, 5).fill(playerColor)

export class PlayerView extends Graphics {
  worldView: WorldView
  player: Player
  trail: Container
  trailCircles: Graphics[]

  constructor(worldView: WorldView, player: Player) {
    super(playerCircle)
    this.worldView = worldView
    this.player = player
    this.trail = new Container()
    this.worldView.trails.addChild(this.trail)
    const L = this.player.history.length
    this.trailCircles = this.player.history.map((p, i) => {
      const trailCircle = new Graphics(playerCircle)
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
    this.x = this.player.position[0]
    this.y = this.player.position[1]
    this.trailCircles.forEach((circle, i) => {
      const h = this.player.history[i]
      circle.x = h[0]
      circle.y = h[1]
    })
  }
}
