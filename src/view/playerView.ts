import { Graphics, GraphicsContext } from 'pixi.js'
import { Player } from '../world/body/player'
import { WorldView } from './worldView'

const playerCircle = new GraphicsContext().circle(0, 0, 5).fill('hsl(220, 100%, 50%)')

export class PlayerView extends Graphics {
  worldView: WorldView
  player: Player

  constructor(worldView: WorldView, player: Player) {
    super(playerCircle)
    this.worldView = worldView
    this.player = player
    this.worldView.addChild(this)
  }

  update(): void {
    this.x = this.player.position[0]
    this.y = this.player.position[1]
  }
}
