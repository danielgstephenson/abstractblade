import { Graphics, GraphicsContext } from 'pixi.js'
import { Player } from '../world/body/player'

const playerCircle = new GraphicsContext().circle(0, 0, 5).fill('hsl(220, 100%, 50%)')

export class PlayerView extends Graphics {
  player: Player

  constructor(player: Player) {
    super(playerCircle)
    this.player = player
    this.player.world.view.addChild(this)
  }

  update(): void {
    this.x = this.player.position[0]
    this.y = this.player.position[1]
  }
}
