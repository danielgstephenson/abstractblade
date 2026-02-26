import { Application } from 'pixi.js'
import { World } from '../world/world'
import { Input } from './input'
import startSvg from '../svg/start.svg?raw'
import { WorldView } from '../view/worldView'

export class Game {
  app: Application
  world: World
  worldView: WorldView
  input: Input
  accumulator = 0

  constructor(app: Application) {
    this.app = app
    this.world = new World(startSvg)
    this.worldView = new WorldView(this, this.world)
    this.input = new Input()
    app.ticker.add(time => {
      this.world.players.forEach(player => player.handleInput(this.input))
      this.world.update(time)
      this.worldView.update()
    })
  }
}
