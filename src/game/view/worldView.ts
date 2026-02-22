import { Application, Container, Ticker } from 'pixi.js'
import { World } from '../../world/world'
import { Game } from '../game'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  accumulator = 0

  constructor(world: World) {
    super()
    this.world = world
    this.game = world.game
    this.app = world.game.app
    this.x = 0.5 * this.app.canvas.width
    this.y = 0.5 * this.app.canvas.height
    this.scale.set(10)
    this.app.stage.addChild(this)
  }

  update(time: Ticker) {
    this.accumulator += time.deltaTime
    while (this.accumulator > this.world.timeStep) {
      this.accumulator -= this.world.timeStep
      this.world.step()
    }
  }
}
