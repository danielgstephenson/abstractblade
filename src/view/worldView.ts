import { Application, Container } from 'pixi.js'
import { World } from '../world/world'
import { Game } from '../game/game'
import { Floor } from './floor'
import { AgentView } from './agentView'
import { BodyView } from './bodyView'

const playerColor = 'hsl(220, 100%, 50%)'
const roverColor = 'hsl(120, 100%, 35%)'
const rockColor = 'hsl(120, 0%, 50%)'

export class WorldView extends Container {
  world: World
  game: Game
  app: Application
  floor: Container
  trails: Container
  bodyViews: BodyView[] = []

  constructor(game: Game, world: World) {
    super()
    this.game = game
    this.world = world
    this.app = this.game.app
    this.app.stage.addChild(this)
    this.floor = new Floor(this)
    this.trails = new Container()
    this.trails.blendMode = 'darken'
    this.addChild(this.trails)
    this.world.players.forEach(player => {
      this.bodyViews.push(new AgentView(this, player, playerColor))
    })
    this.world.rovers.forEach(rover => {
      this.bodyViews.push(new AgentView(this, rover, roverColor))
    })
    this.world.rocks.forEach(rock => {
      this.bodyViews.push(new BodyView(this, rock, rockColor))
    })
  }

  update(): void {
    this.updateCamera()
    this.bodyViews.forEach(x => x.update())
  }

  updateCamera(): void {
    const player = this.world.players[0]
    const offset = player != null ? player.position : [0, 0]
    this.scale = 10 * Math.exp(0.1 * this.game.input.zoom)
    this.x = 0.5 * window.innerWidth - this.scale.x * offset[0]
    this.y = 0.5 * window.innerHeight - this.scale.y * offset[1]
  }
}
