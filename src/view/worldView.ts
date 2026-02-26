import { Application, Container } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { Floor } from './floor'
import { PlayerView } from './playerView'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  floor: Container
  playerViews: PlayerView[] = []

  constructor(game: Game, world: World) {
    super()
    this.game = game
    this.world = world
    this.app = this.game.app
    this.app.stage.addChild(this)
    this.floor = new Floor(this)
    this.world.players.forEach(player => {
      this.playerViews.push(new PlayerView(this, player))
    })
  }

  update(): void {
    this.updateCamera()
    this.playerViews.forEach(x => x.update())
  }

  updateCamera(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    this.scale = 10 * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }
}
