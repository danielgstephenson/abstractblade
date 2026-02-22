import { Application } from 'pixi.js'
import { World } from '../world/world'

export class Game {
  app: Application
  world: World
  accumulator = 0

  constructor(app: Application) {
    this.app = app
    this.world = new World(this)
    app.ticker.add((time) => {
      this.world.view.update(time)
    })
  }
}
