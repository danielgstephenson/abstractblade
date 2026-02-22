import { Application } from 'pixi.js'
import { World } from '../world/world'
import { Input } from './input'

export class Game {
  app: Application
  world: World
  input: Input
  accumulator = 0

  constructor(app: Application) {
    this.app = app
    this.world = new World(this)
    this.input = new Input()
    app.ticker.add(time => {
      this.world.update(time)
    })
  }
}
