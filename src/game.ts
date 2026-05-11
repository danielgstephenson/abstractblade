import { Application } from 'pixi.js'
import { World } from './world'
import { Colors } from './colors'

export class Game {
  app: Application
  world: World
  colors = new Colors()

  constructor(app: Application) {
    this.app = app
    this.world = new World(this)
    this.app.renderer.background.color = this.colors.wallColor
    app.ticker.add(time => {
      this.world.update(time)
    })
  }
}
