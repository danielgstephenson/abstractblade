import { PlayerView } from '../../game/view/playerView'
import { Body } from './body'
import { World } from '../world'

export class Player extends Body {
  view: PlayerView
  drag = 0.7

  constructor(world: World, position: number[]) {
    super(world, position, 5)
    this.world.players.push(this)
    this.view = new PlayerView(this)
  }
}
