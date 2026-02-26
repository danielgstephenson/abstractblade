import { Application, Container, Graphics } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { range } from '../math'
import { Floor } from './floor'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  floor: Container

  constructor(world: World) {
    super()
    this.world = world
    this.game = world.game
    this.app = world.game.app
    this.x = 0.5 * window.innerWidth
    this.y = 0.5 * window.innerHeight
    this.scale.set(10)
    this.app.stage.addChild(this)
    this.floor = new Container()
    // this.addChild(this.floor)
  }

  update(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    this.scale = 10 * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }

  buildFloor(): void {
    this.floor = new Floor(this.world)
    this.addChild(this.floor)
  }
}
