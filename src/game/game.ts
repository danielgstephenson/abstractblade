import { Application } from 'pixi.js'
import { World } from '../world/world'
import { Input } from './input'
import { WorldView } from '../view/worldView'
import { EntityState } from '../world/entity/entity'
import svgLevel1 from '../svg/level1.svg?raw'

export class Game {
  app: Application
  world: World
  worldView: WorldView
  input: Input
  accumulator = 0
  saveState: EntityState[]

  constructor(app: Application) {
    this.app = app
    this.world = new World(svgLevel1)
    this.worldView = new WorldView(this, this.world)
    this.input = new Input()
    this.saveState = this.world.getState()
    app.ticker.add(time => {
      this.world.players.forEach(player => player.handleInput(this.input))
      this.world.update(time)
      this.worldView.update()
    })
    window.addEventListener('keydown', event => {
      if (event.repeat) return
      this.proceed()
    })
    window.addEventListener('mousedown', () => this.proceed())
  }

  proceed(): void {
    if (this.world.players[0].dead) {
      this.world.loadState()
    }
  }
}
