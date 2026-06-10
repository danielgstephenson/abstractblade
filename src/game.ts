import { Application } from 'pixi.js'
import { World } from './world'
import { Colors } from './colors'
import { Menu } from './menu'

export class Game {
  app: Application
  world: World
  menu: Menu
  colors = new Colors()

  constructor(app: Application) {
    this.app = app
    this.world = new World(this)
    this.app.renderer.background.color = 'black'
    this.menu = new Menu(this)
    app.ticker.add(time => {
      this.world.update(time)
    })
  }

  init(): void {
    console.log('game init')
    this.menu.x = this.app.screen.width / 2
    this.menu.y = this.app.screen.height / 2
    this.app.stage.addChild(this.menu)
    window.addEventListener('resize', () => {
      this.menu.x = this.app.screen.width / 2
      this.menu.y = this.app.screen.height / 2
    })
  }
}
